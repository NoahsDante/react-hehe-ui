import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './style/whiteSpace.less';


const propTypes = {
    /**
     * @default hehe-whitespace
     * */
    prefixCls: PropTypes.string,
    /**
     * @default lg
     * */
    size: PropTypes.string
};

const WhiteSpace = React.forwardRef(
    ({
         className,
         size,
         prefixCls,
         style,
         onClick,
         ...props
     }
        , ref) => {

        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

        return (
            <div {...props} className={wrapCls} style={style} ref={ref} onClick={onClick}></div>);
    });
WhiteSpace.propTypes = propTypes;

WhiteSpace.defaultProps = {
    prefixCls: 'hehe-whitespace',
    size: 'md',
};

export default WhiteSpace