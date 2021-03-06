import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';

/**
* A Box can display more important content in a simple manner.
*/
const Block = ({ className, dark, children, ...rest }) => {
  const finalClassName = mergeClassNames({
    'boldrui-block': true,
    'boldrui-block__dark': dark,
    [className]: className && className.length,
  });

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
};
Block.propTypes = {
  /**
   * The children to render within the Box.
   */
  children: PropTypes.node.isRequired,

  /**
   * An optional className of the Box.
   */
  className: PropTypes.string,
  dark: PropTypes.boolean,
};

export default Block;
