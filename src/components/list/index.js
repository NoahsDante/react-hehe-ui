import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListBrief from './ListBrief'
import './style/list.less'

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    renderHeader: PropTypes.func,
    renderFooter: PropTypes.func
};
const defaultProps = {
    prefixCls: 'hehe-list'
};
const List = React.forwardRef(({
                                   prefixCls,
                                   className,
                                   children,
                                   renderHeader,
                                   renderFooter,
                                   ...props
                               }, ref) => {
    const wrapCls = classnames(className, prefixCls);
    return (
        <div className={wrapCls} ref={ref} {...props}>
            {renderHeader ? (
                <div className={`${prefixCls}-header`}>
                    {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
                </div>
            ) : null}
            {children ? (
                <div className={`${prefixCls}-body`}>{children}</div>
            ) : null}
            {renderFooter ? (
                <div className={`${prefixCls}-footer`}>
                    {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
                </div>
            ) : null}
        </div>
    );
});
List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.Item = ListItem;
List.Brief = ListBrief;
export default List