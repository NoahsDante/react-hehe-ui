import classnames from 'classnames';
import React from 'react';
import RcCheckbox from 'rc-checkbox';
import PropsTypes from 'prop-types';

import './style/radio.less';

import RadioItem from './RadioItem';


const propTypes = {
    prefixCls: PropsTypes.string,
    listPrefixCls: PropsTypes.string,
    className: PropsTypes.string,
    style: PropsTypes.object
};

const defaultProps = {
    prefixCls: 'hehe-radio',
    wrapLabel: true,
};

const Radio = React.forwardRef(({className, style, ...props}, ref) => {
    const {prefixCls, children} = props;
    const wrapCls = classnames(`${prefixCls}-wrapper`, className);
    if ('class' in props) {
        delete props['class'];
    }
    const mark = (
      <label className={wrapCls} style={style}>
          <RcCheckbox {...props} type="radio"/>
          {children}
      </label>
    );
    if (props.wrapLabel) {
        return mark;
    }

    return <RcCheckbox {...props} ref={ref} type="radio"/>;
});
Radio.Item = RadioItem;
Radio.defaultProps = defaultProps;
Radio.propTypes = propTypes;

export default Radio



