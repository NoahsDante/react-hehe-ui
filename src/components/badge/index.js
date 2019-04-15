import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    size: PropTypes.string,
    text: PropTypes.string,
    corner: PropTypes.bool,
    dot: PropTypes.bool,
    overflowCount: PropTypes.number,
    hot: PropTypes.bool
};
const defaultProps = {
    prefixCls: 'hehe-badge',
    size: 'small',
    text: '',
    corner: false,
    dot: false,
    overflowCount: 99,
    hot: false
};
const Badge = React.forwardRef(
    ({
         prefixCls,
         ...props
     }
        , ref) => {

        const wrapCls = classnames(prefixCls);


        return (
            <span className={wrapCls} {...props} ref={ref}>

            </span>
        );
    });
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge