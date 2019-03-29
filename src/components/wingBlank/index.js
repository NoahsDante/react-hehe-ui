import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import '../style/wingBlank.less';


const propTypes = {
    /**
     * @default hehe-wingblank
     * */
    prefixCls: PropTypes.string,
    /**
     * @default lg
     * */
    size: PropTypes.string
};

const WingBlank = React.forwardRef((
  {
      children,
      className,
      size,
      prefixCls,
      style,
      ...props
  }
  , ref) => {

    const wrapCls = classNames(prefixCls, `${prefixCls}-${size}`, className);

    return (<div {...props} className={wrapCls} style={style} ref={ref}>{children}</div>);
});
WingBlank.propTypes = propTypes;

WingBlank.defaultProps = {
    prefixCls: 'hehe-wingblank',
    size: 'lg',
};

export default WingBlank