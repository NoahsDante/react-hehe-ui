import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './style/grid.less';

const propTypes = {
    prefixCls: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-grid',

};
const Grid = React.forwardRef(
  ({
       prefixCls,
       className,
       data,
       hasLine,
       square,
       activeStyle,
       activeClassName,
       ...props
   }, ref) => {

      let {
          columnNum,
          carouselMaxRow,
          onClick,
          renderItem,
          ...restPropsForCarousel
      } = props;
      const dataLength = (data && data.length) || 0;
      let rowCount = Math.ceil(dataLength / columnNum);
      const wrapCls = classnames(prefixCls, className, {
          [`${prefixCls}-square`]: square,
          [`${prefixCls}-line`]: hasLine,
      });

      return (<div className={wrapCls} ref={ref} {...props} />)
  });


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;