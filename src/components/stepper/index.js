import classnames from 'classnames';
import React from 'react';
import PropsTypes from 'prop-types';
import RMCInputNumber from 'rmc-input-number';


import './style/stepper.less';

const propTypes = {
    prefixCls: PropsTypes.string,
    showNumber: PropsTypes.bool,
    className: PropsTypes.string,
    min: PropsTypes.number,
    max: PropsTypes.number,
    step: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    readOnly: PropsTypes.bool,
    disabled: PropsTypes.bool,
    autoFocus: PropsTypes.bool,
    value: PropsTypes.number,
    defaultValue: PropsTypes.number,
    onChange: PropsTypes.func,
    upStyle: PropsTypes.object,
    downStyle: PropsTypes.object,
    inputStyle: PropsTypes.object,
    name: PropsTypes.string,
};

const defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
    focusOnUpDown: false,
};

const Stepper = React.forwardRef(({className, showNumber, ...props}, ref) => {
    const stepperClass = classnames(className, {
        ['showNumber']: !!showNumber,
    });
    return (
      <RMCInputNumber
        upHandler={'dddd'}
        downHandler={'ssss'}
        {...props}
        ref={ref}
        className={stepperClass}
      />
    );
});

Stepper.defaultProps = defaultProps;
Stepper.propTypes = propTypes;

export default Stepper;

