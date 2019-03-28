import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import FlexItem from './FlexItem';

const propTypes = {
    direction:PropTypes.oneOf(['row','row-reverse','column','column-reverse']),
    wrap:PropTypes.oneOf(['nowrap','wrap','wrap-reverse']),
    justify:PropTypes.oneOf(['start','end','center','between','around']),
    align:PropTypes.oneOf(['start','center','end','baseline','stretch']),
    alignContent:PropTypes.oneOf(['start','end','center','between','around','stretch']),
};

const Flex = React.forwardRef((
  {
      direction,
      wrap,
      justify,
      align,
      alignContent,
      className,
      children,
      prefixCls,
      style,
      ...props
  }
  , ref) => {

    const wrapCls = classNames(prefixCls, className, {
        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-content-start`]: alignContent === 'start',
        [`${prefixCls}-align-content-end`]: alignContent === 'end',
        [`${prefixCls}-align-content-center`]: alignContent === 'center',
        [`${prefixCls}-align-content-between`]: alignContent === 'between',
        [`${prefixCls}-align-content-around`]: alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
    });


    return (<div {...props} className={wrapCls} style={style} ref={ref}>{children}</div>);
});
Flex.propTypes = propTypes;

Flex.defaultProps = {
    prefixCls: 'hehe-flexbox',
    align: 'center'
};
Flex.Item = FlexItem;
export default Flex