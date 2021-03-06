import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTrigger extends Component {
  render() {
    let { prefixCls, onClick } = this.props;

    return (
      <div className={`${prefixCls}-text`} onClick={onClick}>
        {this.props.text || this.props.placeholder}
      </div>
    );
  }
}

SelectTrigger.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.any,
  text: PropTypes.any,
  placeholder: PropTypes.string,
};

export default SelectTrigger;
