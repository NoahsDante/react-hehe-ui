import classnames from 'classnames';
import React from 'react';
import loadSprite from './loadSprite';
import PropTypes from "prop-types";

import './style/index.less'

const propTypes = {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg']),
    onClick: PropTypes.func,
};

class Icon extends React.Component {
    static defaultProps = {
        size: 'md',
    };

    componentDidMount() {
        loadSprite();
    }

    render() {
        const {type, className, size, ...restProps} = this.props;
        const cls = classnames(
          className,
          'hehe-icon',
          `hehe-icon-${type}`,
          `hehe-icon-${size}`,
        );
        return (
          <svg className={cls} {...restProps}>
              <use xlinkHref={`#${type}`}/>
          </svg>
        );
    }
}

Icon.propTypes = propTypes;


export default Icon