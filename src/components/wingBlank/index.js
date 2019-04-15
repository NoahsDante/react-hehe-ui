import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './style/wingBlank.less';


const propTypes = {
    /**
     * @default hehe-wingblank
     * */
    prefixCls: PropTypes.string,
    /**
     * 两翼留白的间距
     * @default lg
     * */
    size: PropTypes.string
};

const WingBlank = React.forwardRef(
    ({
         children,
         className,
         size,
         prefixCls,
         style,
         ...props
     }, ref) => {

        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

        return (<div {...props} className={wrapCls} style={style} ref={ref}>{children}</div>);
    });
WingBlank.propTypes = propTypes;

WingBlank.defaultProps = {
    prefixCls: 'hehe-wingblank',
    size: 'lg',
};

export default WingBlank