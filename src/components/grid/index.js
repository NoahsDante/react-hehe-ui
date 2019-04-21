import classnames from 'classnames';
import React from 'react';
import Flex from '../flex';
import TouchFeedback from 'rmc-feedback';
import PropTypes from 'prop-types';

import './style/grid.less';

const propTypes = {
    prefixCls: PropTypes.string
};
const defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'hehe-grid',
    square: true,
    itemStyle: {},

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
       itemStyle,
       ...props
   }, ref) => {
      let {
          columnNum,
          onClick,
          renderItem,
      } = props;
      const dataLength = (data && data.length) || 0;
      let rowCount = Math.ceil(dataLength / columnNum);

      let renderItems = (dataItem, index, columnNum, renderItem,) => {
          let itemEl = null;
          if (renderItem) {
              itemEl = renderItem(dataItem, index);
          } else {
              if (dataItem) {
                  const {icon, text} = dataItem;
                  itemEl = (
                    <div className={`${prefixCls}-item-inner-content column-num-${columnNum}`}>
                        {React.isValidElement(icon) ? (
                          icon
                        ) : (
                          <img className={`${prefixCls}-icon`} src={icon}/>
                        )}
                        <div className={`${prefixCls}-text`}>{text}</div>
                    </div>
                  );
              }
          }
          return (<div className={`${prefixCls}-item-content`}>{itemEl}</div>);
      };

      const getRows = (rowCount, dataLength) => {
          const rowsArr = [];
          const rowWidth = `${100 / columnNum}%`;
          const colStyle = {
              width: rowWidth,
              ...itemStyle,
          };

          for (let i = 0; i < rowCount; i++) {
              const rowArr = [];
              for (let j = 0; j < columnNum; j++) {
                  const dataIndex = i * columnNum + j;
                  let itemEl;
                  if (dataIndex < dataLength) {
                      const el = data && data[dataIndex];
                      itemEl = (
                        <TouchFeedback
                          key={`griditem-${dataIndex}`}
                          activeClassName={
                              activeClassName ? activeClassName : `${prefixCls}-item-active`}
                          activeStyle={activeStyle}
                        >
                            <Flex.Item
                              className={`${prefixCls}-item`}
                              onClick={() => onClick && onClick(el, dataIndex)}
                              style={colStyle}
                            >
                                {renderItems(el, dataIndex, columnNum, renderItem)}
                            </Flex.Item>
                        </TouchFeedback>
                      );
                  } else {
                      itemEl = (
                        <Flex.Item
                          key={`griditem-${dataIndex}`}
                          className={`${prefixCls}-item ${prefixCls}-null-item`}
                          style={colStyle}
                        />
                      );
                  }
                  rowArr.push(itemEl);
              }
              rowsArr.push(
                <Flex justify="center" align="stretch" key={`gridline-${i}`}>
                    {rowArr}
                </Flex>,
              );
          }
          return rowsArr;
      };


      const wrapCls = classnames(prefixCls, className, {
          [`${prefixCls}-square`]: square,
          [`${prefixCls}-not-square`]: !square,
          [`${prefixCls}-line`]: hasLine,
      });
      let renderEl = getRows(rowCount, dataLength);
      return (
        <div className={wrapCls} ref={ref} {...props}>
            {renderEl}
        </div>
      )
  });


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;