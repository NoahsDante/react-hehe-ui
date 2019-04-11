import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
};
const defaultProps = {
    prefixCls: 'hehe-list'
};
const ListBrief = React.forwardRef(({prefixCls,className, ...props}, ref) => {
    const wrapCls = classnames(`${prefixCls}-brief`, className);
    return (<div className={wrapCls} {...props} ref={ref}></div>);
});
ListBrief.propTypes = propTypes;
ListBrief.defaultProps = defaultProps;
export default ListBrief