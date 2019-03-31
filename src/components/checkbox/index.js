import classNames from 'classnames';

import React from 'react';
import PropTypes from 'prop-types';

import '../style/checkbox.less'

const propTypes = {
    prefixCls:PropTypes.string,
    className:PropTypes.string,
    style:PropTypes.object,
    name:PropTypes.string,
    id:PropTypes.string,
    type: PropTypes.string,
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    value: PropTypes.any,

};

const defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
};




const Checkbox = React.forwardRef(({...props},ref) => {

    return (
        <span>
        <input {...props}/>
            <span></span>
        </span>
    );
});

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;