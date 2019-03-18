import React from 'react';
import PropTypes from 'prop-types';

function isTriviaHref(href) {
    return !href || href.trim() === '#';
}

class SafeAnchor extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const {disabled, onClick, href} = this.props;
        if (disabled || isTriviaHref(href)) {
            event.preventDefault();
        }
        if (disabled) {
            event.stopPropagation();
            return
        }
        if (onClick) {
            onClick(event);
        }
    }

    render() {
        const {
            as: Component,
            disabled,
            innerRef,
            ...props
        } = this.props;
        if (disabled) {
            props.tabIndex = -1;
        }
        if (isTriviaHref(props.href)) {
            props.role = 'button';
            props.href = props.href || '#';
        }
        return (<Component
                {...props}
                ref={innerRef}
                onClick={this.handleClick}
            />
        );
    }
}

SafeAnchor.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    as: PropTypes.elementType,
    innerRef: PropTypes.any,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
SafeAnchor.defaultProps = {
    as: 'a'
};
export default SafeAnchor;