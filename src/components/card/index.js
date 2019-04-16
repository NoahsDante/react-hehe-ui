import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './style/card.less'

import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const propTypes = {
    prefixCls: PropTypes.string,
    full: PropTypes.bool
};
const defaultProps = {
    prefixCls: 'hehe-card',
    full: false
};
const Card = React.forwardRef(
  ({
       prefixCls,
       full,
       ...props
   }, ref) => {
      const wrapCls = classnames(prefixCls, {
          [`${prefixCls}-full`]: full
      });
      return (<div className={wrapCls} ref={ref} {...props}/>)
  });


Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;