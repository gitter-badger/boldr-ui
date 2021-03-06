import React, { Component } from 'react';
import assign from 'lodash/assign';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from './components/Checkbox';
import Loading from './components/Loading';

let isTriggerSlide = false;

const deepClone = arr => {
  let i, copy;

  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (i = 0; i < copy.length; i += 1) {
      copy[i] = deepClone(copy[i]);
    }
    return copy;
  } else if (typeof arr === 'object') {
    return assign({}, arr);
  }
  return arr;
};

const toggleSlide = (el, isClose) => {
  if (!isClose) {
    el.style.display = 'block';
    el.style.height = 0;
  }
  const maxDelay = 300;
  const height = el.scrollHeight;
  // px/ms
  const speed = Math.max(height / maxDelay, 0.5);
  let sum = 0;

  let start = null;
  const animate = timestamp => {
    if (!start) {
      start = timestamp;
    }
    const progress = timestamp - start;
    sum = progress * speed;
    el.style.height = `${isClose ? height - sum : sum}px`;
    if (height < sum) {
      if (isClose) {
        el.style.display = 'none';
      }
      el.style.height = '';
      isTriggerSlide = false;
    } else {
      window.requestAnimationFrame(animate);
    }
  };
  window.requestAnimationFrame(animate);
};

export default class Tree extends Component {
  static propTypes = {
    dataType: PropTypes.oneOf(['plain', 'tree']),
    data: PropTypes.arrayOf(PropTypes.object),
    isRoot: PropTypes.func,
    loadMore: PropTypes.func,
    foldable: PropTypes.bool,
    checkable: PropTypes.bool,
    autoExpandOnSelect: PropTypes.bool,
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.any),
    disabledCheckedKeys: PropTypes.arrayOf(PropTypes.any),
    onCheck: PropTypes.func,
    onExpand: PropTypes.func,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    operations: PropTypes.arrayOf(PropTypes.object),
    render: PropTypes.func,
    prefix: PropTypes.string,
  };

  static defaultProps = {
    autoExpandOnSelect: true,
    dataType: 'tree',
    foldable: true,
    checkable: false,
    size: 'medium',
    prefix: 'boldrui',
  };

  state = {
    checkedTree: {},
    loadingNode: [],
  };

  componentWillMount() {
    // init checkedTree
    const { data, dataType } = this.props;
    const formatData = this.formatDataIntoTree(data, dataType);

    this.setState({
      checkedTree: this.formatDataIntoCheckedTree(formatData),
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      // update checkTree
      this.isDataUpdate = true;

      const data = this.formatDataIntoTree(nextProps.data, nextProps.dataType);
      this.setState({
        checkedTree: this.formatDataIntoCheckedTree(data),
      });
    }
  }

  isInitial = true;
  isDataUpdate = false;

  formatDataIntoTree(data, dataType) {
    let roots = [];
    if (dataType === 'plain') {
      const { isRoot } = this.props;
      const map = {};
      data.forEach(node => {
        if (!node.isLeaf) {
          node.children = [];
        }
        map[node.id] = node;
      });
      Object.keys(map).forEach(key => {
        const node = map[key];
        const isRootNode =
          (isRoot && isRoot(node)) ||
          node.parentId === 0 ||
          node.parentId === undefined ||
          node.parentId === '0';

        if (isRootNode) {
          roots.push(node);
        } else if (map[node.parentId]) {
          map[node.parentId].children.push(node);
        }
      });
    } else if (dataType === 'tree') {
      roots = data;
    } else {
      // console.error(`The dataType should be declared as plain/tree, but
      //  your dataType is ${dataType}, Please check your config.`)
    }
    return roots;
  }

  formatDataIntoCheckedTree(data) {
    let checkedTree = {};
    if (this.isInitial) {
      checkedTree = this.initialCheckedTree(data);
      this.isInitial = false;
    } else if (this.isDataUpdate) {
      checkedTree = this.reloadCheckedTree(data);
      this.isDataUpdate = false;
    }
    this.updateWholeCheckedTree(checkedTree);
    return checkedTree;
  }

  isSwitcherExpanded(node) {
    return !node.parentNode.classList.contains('off');
  }

  handleExpandClick(root, e) {
    const { loadMore } = this.props;
    const { loadingNode } = this.state;
    if (loadMore) {
      if (!root.children || root.children.length === 0) {
        e.persist();
        this.setState({ loadingNode: [root.id, ...loadingNode] });
        loadMore(root)
          .then(() => {
            this.setState({
              loadingNode: loadingNode.filter(x => x !== root.id),
            });
            this.handleFoldClick(root, e);
          })
          .catch(() => {});
        return;
      }
    }
    this.handleFoldClick(root, e);
  }

  handleFoldClick(root, e) {
    if (!isTriggerSlide) {
      const { onExpand } = this.props;
      const switcher = e.target;
      const elp = switcher.parentNode;
      elp.classList.toggle('off');
      const isClose = !this.isSwitcherExpanded(switcher);

      if (onExpand) {
        onExpand(root, {
          isExpanded: !isClose,
        });
      }

      const el = elp.nextSibling;
      // no content, unmount switcher
      if (!el) {
        switcher.remove();
        return;
      }
      isTriggerSlide = true;
      toggleSlide(el, isClose);
    }
  }

  triggerSwitcherClick(root, e) {
    const { autoExpandOnSelect, onSelect } = this.props;
    const target = e.currentTarget;
    if (onSelect) {
      onSelect(root, target);
    }
    if (target && autoExpandOnSelect) {
      const switcher = target.parentNode.previousSibling;
      if (switcher) {
        switcher.click();
      }
    }
  }

  handleCheckboxClick(root) {
    const { onCheck } = this.props;
    const { checkedTree } = this.state;
    this.updateCheckedTree(root.id, checkedTree[root.id].t !== 2 ? 2 : 0);
    if (onCheck) {
      onCheck(
        Object.keys(checkedTree).filter(k => checkedTree[k].t === 2).map(x => {
          if (typeof root.id === 'number') {
            x = +x;
          }
          return x;
        }),
      );
    }
  }

  updateUpstream(id, type, checkedTree) {
    if (!id) {
      return;
    }
    if (type === 2) {
      checkedTree[id].t = Object.keys(checkedTree)
        .filter(x => checkedTree[x].p === id)
        .every(x => checkedTree[x].t === 2)
        ? 2
        : 1;
    } else if (type === 1) {
      checkedTree[id].t = 1;
    } else if (type === 0) {
      checkedTree[id].t = Object.keys(checkedTree)
        .filter(x => checkedTree[x].p === id)
        .every(x => checkedTree[x].t === 0)
        ? 0
        : 1;
    }
    if (checkedTree[id].p) {
      this.updateUpstream(checkedTree[id].p, checkedTree[id].t, checkedTree);
    }
  }

  updateDownstream(id, type, checkedTree) {
    if (!id) {
      return;
    }
    checkedTree[id].t = type;
    const childrenId = Object.keys(checkedTree).filter(
      x => checkedTree[x].p === id,
    );
    if (childrenId.length > 0) {
      childrenId.forEach(childId => {
        this.updateDownstream(childId, type, checkedTree);
      });
    }
  }

  updateCheckedTree(id, type) {
    const { checkedTree } = this.state;
    const parentId = checkedTree[id].p;
    const childrenId = Object.keys(checkedTree).filter(
      x => checkedTree[x].p === id.toString(),
    );
    checkedTree[id].t = type;

    this.updateUpstream(parentId, type, checkedTree);
    childrenId.forEach(childId => {
      this.updateDownstream(childId, type, checkedTree);
    });

    this.setState({ checkedTree });
  }

  updateCheckedTreeRecursive(root, parentId, func) {
    func(root, parentId);
    if (root.children && root.children.length > 0) {
      root.children.forEach(child => {
        this.updateCheckedTreeRecursive(child, root.id, func);
      });
    }
  }

  updateWholeCheckedTree(checkedTree) {
    Object.keys(checkedTree).forEach(id => {
      if (checkedTree[id].t === 2) {
        this.updateUpstream(id, 2, checkedTree);
        this.updateDownstream(id, 2, checkedTree);
      }
    });
  }

  initialCheckedTree(data) {
    const newCheckedTree = {};
    const { defaultCheckedKeys } = this.props;

    data.forEach(tree => {
      this.updateCheckedTreeRecursive(tree, '', (root, parentId) => {
        const isSetDefault =
          defaultCheckedKeys &&
          defaultCheckedKeys.find(x => x === root.id) >= 0;
        newCheckedTree[root.id] = {
          p: parentId.toString(),
          t: isSetDefault ? 2 : 0,
        };
      });
    });
    return newCheckedTree;
  }

  reloadCheckedTree(data) {
    const newCheckedTree = {};
    const { checkedTree } = this.state;

    data.forEach(tree => {
      this.updateCheckedTreeRecursive(tree, '', (root, parentId) => {
        newCheckedTree[root.id] = {
          p: parentId.toString(),
          t: checkedTree[root.id] ? checkedTree[root.id].t : 0,
        };
      });
    });
    return newCheckedTree;
  }

  renderSwitcher(root) {
    const { foldable, loadMore } = this.props;
    if (
      !root.isLeaf &&
      (loadMore || (root.children && root.children.length > 0))
    ) {
      return (
        <icon
          className="switcher"
          onClick={foldable && this.handleExpandClick.bind(this, root)}
        />
      );
    }
  }

  renderCheckbox(root) {
    const { checkable, disabledCheckedKeys } = this.props;
    const isDisabled =
      (disabledCheckedKeys || []).find(key => key === root.id) >= 0;

    if (checkable) {
      return (
        <Checkbox
          onCheck={this.handleCheckboxClick.bind(this, root)}
          type={this.state.checkedTree[root.id].t}
          disabled={isDisabled}
        />
      );
    }
  }

  renderOperations(root) {
    const opts = this.props.operations;
    if (opts) {
      const optNodes = opts.map(opt => {
        const shouldRender = opt.shouldRender || (() => true);
        return (
          shouldRender(root) &&
          <span
            key={`${opt.name}-${root.id}`}
            onClick={opt.action.bind(null, root)}
            className="opt"
          >
            {typeof opt.icon === 'string'
              ? <icon className={opt.icon} />
              : opt.icon}
            {' '}
            {opt.name}
          </span>
        );
      });
      return (
        <div className="operation">
          {optNodes}
        </div>
      );
    }
  }

  renderTreeNodes(roots) {
    const { loadingNode } = this.state;
    const { loadMore, prefix, expandAll, render } = this.props;
    if (roots && roots.length > 0) {
      return roots.map(root => {
        let isShowChildren = expandAll;
        if (loadMore) {
          isShowChildren = root.expand;
        }
        const barClassName = classnames(`${prefix}-tree-bar`, {
          off: !isShowChildren,
        });
        return (
          <li key={`${root.id}`}>
            <div className={barClassName}>
              {this.renderSwitcher(root)}
              <div className="zent-tree-node">
                {this.renderCheckbox(root)}
                {loadingNode.indexOf(root.id) > -1 ? <Loading /> : null}
                <span
                  className="content"
                  onClick={this.triggerSwitcherClick.bind(this, root)}
                >
                  {render ? render(root) : root.title}
                </span>
                {this.renderOperations(root)}
              </div>
            </div>
            {root.children &&
              root.children.length > 0 &&
              <ul
                key={`ul-${root.id}`}
                className={`${prefix}-tree-child`}
                style={isShowChildren ? {} : { display: 'none' }}
              >
                {this.renderTreeNodes(root.children)}
              </ul>}
          </li>
        );
      });
    }
  }

  render() {
    const { commonStyle, data, dataType, prefix, size } = this.props;
    const roots = this.formatDataIntoTree(deepClone(data), dataType);
    const treeNodes = this.renderTreeNodes(roots);
    const classNames = classnames(`${prefix}-tree`, {
      [`${prefix}-tree-${size}`]: size !== 'medium',
    });

    return (
      <ul className={classNames} style={commonStyle}>
        {treeNodes}
      </ul>
    );
  }
}
