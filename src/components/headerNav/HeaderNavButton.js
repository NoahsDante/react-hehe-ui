import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../buttons/Button';

import '../style/headerBar.less'


const propTypes = {
    /**
     * 按钮方向
     * @default left
     * */
    direction: PropTypes.string,
    /**
     * 是否填充按钮
     *  @default false
     * */
    fill: PropTypes.bool,
};
const defaultProps = {
    direction: 'left',
    fill: false
};
const HeaderNavButton = React.forwardRef(({direction,className, fill, ...props}, ref) => {

    return (
        <Button
            {...props}
            variant='light'
            className={classNames(className,`pull-${direction}`)}
            ref={ref}
            fill={fill}/>
            );
});

HeaderNavButton.displayName = 'HeaderNavButton';
HeaderNavButton.propTypes = propTypes;
HeaderNavButton.defaultProps = defaultProps;
export default HeaderNavButton