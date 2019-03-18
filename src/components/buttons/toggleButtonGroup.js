import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * 自定义 className
     * */
    className: PropTypes.string,
    /**
     * @default buttons-row
     * */
    bsPrefix: PropTypes.string,
    role: PropTypes.string
};
const defaultProps = {
    bsPrefix: 'buttons-row',
    role: 'group',
};
const ToggleButtonGroup = React.forwardRef(({bsPrefix, className, ...props}, ref) => {
    return (
        <div {...props} className={classNames(className, bsPrefix)} ref={ref}></div>
    );
});

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
ToggleButtonGroup.propTypes = propTypes;
ToggleButtonGroup.defaultProps = defaultProps;
export default ToggleButtonGroup;
