import classNames from 'classnames';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import '../style/drawer.less';

function getOffset(ele) {
    let el = ele;
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,

    style: PropTypes.object,
    sidebarStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    dragHandleStyle: PropTypes.object,

    sidebar: PropTypes.node.isRequired,
    docked: PropTypes.bool,
    open: PropTypes.bool,
    transitions: PropTypes.bool,
    touch: PropTypes.bool,
    enableDragHandle: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    dragToggleDistance: PropTypes.number,
    onOpenChange: PropTypes.func,
};
const defaultProps = {
    prefixCls: 'hehe-drawer',
    sidebarStyle: {},
    contentStyle: {},
    overlayStyle: {},
    dragHandleStyle: {},
    docked: false,
    open: false,
    transitions: true,
    touch: true,
    enableDragHandle: true,
    position: 'left',
    dragToggleDistance: 30,
    onOpenChange: () => {},
};
const CANCEL_DISTANCE_ON_SCROLL = 20;
class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarWidth: 0,
            sidebarHeight: 0,
            sidebarTop: 0,
            dragHandleTop: 0,
            touchIdentifier: null,
            touchStartX: null,
            touchStartY: null,
            touchCurrentX: null,
            touchCurrentY: null,
            touchSupported: typeof window === 'object' && 'ontouchstart' in window,
        };
    }

    componentDidMount() {
        this.saveSidebarSize();
    }

    componentDidUpdate() {
        if (!this.isTouching()) {
            this.saveSidebarSize();
        }
    }

    onOverlayClicked = () => {
        if (this.props.open) {
            setTimeout(() => {
                this.props.onOpenChange(false, { overlayClicked: true });
            }, 0);
        }
    }

    onTouchStart = (ev) => {
        if (!this.isTouching()) {
            const touch = ev.targetTouches[0];
            this.setState({
                touchIdentifier: !this.notTouch ? touch.identifier : null,
                touchStartX: touch.clientX,
                touchStartY: touch.clientY,
                touchCurrentX: touch.clientX,
                touchCurrentY: touch.clientY,
            });
        }
    }

    onTouchMove = (ev) => {
        if (this.isTouching()) {
            for (let ind = 0; ind < ev.targetTouches.length; ind++) {
                if (ev.targetTouches[ind].identifier === this.state.touchIdentifier) {
                    this.setState({
                        touchCurrentX: ev.targetTouches[ind].clientX,
                        touchCurrentY: ev.targetTouches[ind].clientY,
                    });
                    break;
                }
            }
        }
    }

    onTouchEnd = () => {
        this.notTouch = false;
        if (this.isTouching()) {
            const touchWidth = this.touchSidebarWidth();

            if (this.props.open && touchWidth < this.state.sidebarWidth - this.props.dragToggleDistance ||
                !this.props.open && touchWidth > this.props.dragToggleDistance) {
                this.props.onOpenChange(!this.props.open);
            }

            const touchHeight = this.touchSidebarHeight();

            if (this.props.open &&
                touchHeight < this.state.sidebarHeight - this.props.dragToggleDistance ||
                !this.props.open && touchHeight > this.props.dragToggleDistance) {
                this.props.onOpenChange(!this.props.open);
            }

            this.setState({
                touchIdentifier: null,
                touchStartX: null,
                touchStartY: null,
                touchCurrentX: null,
                touchCurrentY: null,
            });
        }
    }

    onScroll = () => {
        if (this.isTouching() && this.inCancelDistanceOnScroll()) {
            this.setState({
                touchIdentifier: null,
                touchStartX: null,
                touchStartY: null,
                touchCurrentX: null,
                touchCurrentY: null,
            });
        }
    }

    inCancelDistanceOnScroll = () => {
        let cancelDistanceOnScroll;
        switch (this.props.position) {
            case 'right':
                cancelDistanceOnScroll = Math.abs(this.state.touchCurrentX - this.state.touchStartX) <
                    CANCEL_DISTANCE_ON_SCROLL;
                break;
            case 'bottom':
                cancelDistanceOnScroll = Math.abs(this.state.touchCurrentY - this.state.touchStartY) <
                    CANCEL_DISTANCE_ON_SCROLL;
                break;
            case 'top':
                cancelDistanceOnScroll = Math.abs(this.state.touchStartY - this.state.touchCurrentY) <
                    CANCEL_DISTANCE_ON_SCROLL;
                break;
            case 'left':
            default:
                cancelDistanceOnScroll = Math.abs(this.state.touchStartX - this.state.touchCurrentX) <
                    CANCEL_DISTANCE_ON_SCROLL;
        }
        return cancelDistanceOnScroll;
    }

    isTouching = () => {
        return this.state.touchIdentifier !== null;
    }

    saveSidebarSize = () => {
        const sidebar = ReactDOM.findDOMNode(this.refs.sidebar);
        const width = sidebar.offsetWidth;
        const height = sidebar.offsetHeight;
        const sidebarTop = getOffset(ReactDOM.findDOMNode(this.refs.sidebar)).top;
        const dragHandleTop = getOffset(ReactDOM.findDOMNode(this.refs.dragHandle)).top;

        if (width !== this.state.sidebarWidth) {
            this.setState({ sidebarWidth: width });
        }
        if (height !== this.state.sidebarHeight) {
            this.setState({ sidebarHeight: height });
        }
        if (sidebarTop !== this.state.sidebarTop) {
            this.setState({ sidebarTop });
        }
        if (dragHandleTop !== this.state.dragHandleTop) {
            this.setState({ dragHandleTop });
        }
    }
    touchSidebarWidth = () => {
        if (this.props.position === 'right') {
            if (this.props.open && window.innerWidth - this.state.touchStartX < this.state.sidebarWidth) {
                if (this.state.touchCurrentX > this.state.touchStartX) {
                    return this.state.sidebarWidth + this.state.touchStartX - this.state.touchCurrentX;
                }
                return this.state.sidebarWidth;
            }
            return Math.min(window.innerWidth - this.state.touchCurrentX, this.state.sidebarWidth);
        }

        if (this.props.position === 'left') {
            if (this.props.open && this.state.touchStartX < this.state.sidebarWidth) {
                if (this.state.touchCurrentX > this.state.touchStartX) {
                    return this.state.sidebarWidth;
                }
                return this.state.sidebarWidth - this.state.touchStartX + this.state.touchCurrentX;
            }
            return Math.min(this.state.touchCurrentX, this.state.sidebarWidth);
        }
    }
    touchSidebarHeight = () => {
        if (this.props.position === 'bottom') {
            if (this.props.open &&
                window.innerHeight - this.state.touchStartY < this.state.sidebarHeight) {
                if (this.state.touchCurrentY > this.state.touchStartY) {
                    return this.state.sidebarHeight + this.state.touchStartY - this.state.touchCurrentY;
                }
                return this.state.sidebarHeight;
            }
            return Math.min(window.innerHeight - this.state.touchCurrentY, this.state.sidebarHeight);
        }

        if (this.props.position === 'top') {
            const touchStartOffsetY = this.state.touchStartY - this.state.sidebarTop;
            if (this.props.open && touchStartOffsetY < this.state.sidebarHeight) {
                if (this.state.touchCurrentY > this.state.touchStartY) {
                    return this.state.sidebarHeight;
                }
                return this.state.sidebarHeight - this.state.touchStartY + this.state.touchCurrentY;
            }
            return Math.min(this.state.touchCurrentY - this.state.dragHandleTop,
                this.state.sidebarHeight);
        }
    }

    renderStyle = ({ sidebarStyle, isTouching, overlayStyle, contentStyle }) => {
        if (this.props.position === 'right' || this.props.position === 'left') {
            sidebarStyle.transform = `translateX(0%)`;
            sidebarStyle.WebkitTransform = `translateX(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarWidth() / this.state.sidebarWidth;
                // slide open to what we dragged
                if (this.props.position === 'right') {
                    sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`;
                }
                if (this.props.position === 'left') {
                    sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`;
                }
                // fade overlay to match distance of drag
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this.props.position] = `${this.state.sidebarWidth}px`;
            }
        }
        if (this.props.position === 'top' || this.props.position === 'bottom') {
            sidebarStyle.transform = `translateY(0%)`;
            sidebarStyle.WebkitTransform = `translateY(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarHeight() / this.state.sidebarHeight;
                if (this.props.position === 'bottom') {
                    sidebarStyle.transform = `translateY(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(${(1 - percentage) * 100}%)`;
                }
                if (this.props.position === 'top') {
                    sidebarStyle.transform = `translateY(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(-${(1 - percentage) * 100}%)`;
                }
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this.props.position] = `${this.state.sidebarHeight}px`;
            }
        }
    }

    render() {
        const { className, style, prefixCls, position, transitions,
            touch, enableDragHandle, sidebar, children, docked, open } = this.props;

        const sidebarStyle = { ...this.props.sidebarStyle };
        const contentStyle = { ...this.props.contentStyle };
        const overlayStyle = { ...this.props.overlayStyle };

        const rootCls = {
            [className]: !!className,
            [prefixCls]: true,
            [`${prefixCls}-${position}`]: true,
        };

        const rootProps = { style };
        const isTouching = this.isTouching();

        if (isTouching) {
            this.renderStyle({ sidebarStyle, isTouching: true, overlayStyle });
        } else if (docked) {
            if (this.state.sidebarWidth !== 0) {
                rootCls[`${prefixCls}-docked`] = true;
                this.renderStyle({ sidebarStyle, contentStyle });
            }
        } else if (open) {
            rootCls[`${prefixCls}-open`] = true;
            this.renderStyle({ sidebarStyle });
            overlayStyle.opacity = 1;
            overlayStyle.visibility = 'visible';
        }

        if (isTouching || !transitions) {
            sidebarStyle.transition = 'none';
            sidebarStyle.WebkitTransition = 'none';
            contentStyle.transition = 'none';
            overlayStyle.transition = 'none';
        }

        let dragHandle = null;

        if (this.state.touchSupported && touch) {
            if (open) {
                rootProps.onTouchStart = (ev) => {
                    this.notTouch = true;
                    this.onTouchStart(ev);
                };
                rootProps.onTouchMove = this.onTouchMove;
                rootProps.onTouchEnd = this.onTouchEnd;
                rootProps.onTouchCancel = this.onTouchEnd;
                rootProps.onScroll = this.onScroll;
            } else if (enableDragHandle) {
                dragHandle = (
                    <div className={`${prefixCls}-draghandle`} style={this.props.dragHandleStyle}
                         onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}
                         onTouchEnd={this.onTouchEnd} onTouchCancel={this.onTouchEnd}
                         ref="dragHandle"
                    />);
            }
        }

        return (
            <div className={classNames(rootCls)} {...rootProps}>
                <div className={`${prefixCls}-sidebar`} style={sidebarStyle}
                     ref="sidebar"
                >
                    {sidebar}
                </div>
                {}
                <div className={`${prefixCls}-overlay`}
                     style={overlayStyle}
                     role="presentation"
                     ref="overlay"
                     onClick={this.onOverlayClicked}
                />
                <div className={`${prefixCls}-content`} style={contentStyle}
                     ref="content"
                >
                    {dragHandle}
                    {children}
                </div>
            </div>
        );
    }
}
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
export default Drawer;