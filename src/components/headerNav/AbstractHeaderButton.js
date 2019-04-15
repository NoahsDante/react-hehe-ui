import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/index';

const propTypes = {
    /**
     * 按钮方向
     * @default left
     * */
    direction: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
};
const defaultProps = {
    direction: 'left',
};

const AbstractHeaderButton = ({className, direction, ...props}) => {
    return (<Button {...props} className={classNames(className, direction && `pull-${direction}`)}></Button>);
}
AbstractHeaderButton.propTypes = propTypes;
AbstractHeaderButton.defaultProps = defaultProps;


export default AbstractHeaderButton