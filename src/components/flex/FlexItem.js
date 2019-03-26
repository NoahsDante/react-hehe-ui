import classNames, {default as classnames} from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = React.forwardRef((
    {
        className,
        prefixCls,
        ...props
    },ref) => {
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (<div {...props} className={wrapCls} ref={ref}></div>);
});
FlexItem.propTypes = {

};
FlexItem.defaultProps = {
    prefixCls:'hehe-flexbox',
};

export default FlexItem;