import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
      prefixCls: PropTypes.string,
      text: PropTypes.string,
      loop: PropTypes.bool,
      leading: PropTypes.number,
      trailing: PropTypes.number,
      className: PropTypes.string,
      fps: PropTypes.number,
      style: PropTypes.object,
  }
;
const defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    className: '',
};

class Marquee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedWidth: 0,
            overflowWidth: 0,
        }
        this.textRef = null;
        this._marqueeTimer = 0

    }

    componentDidMount() {
        this._measureText();
        this._startAnimation();
    }

    componentDidUpdate() {
        this._measureText();
        if (!this._marqueeTimer) {
            this._startAnimation();
        }
    }

    componentWillUnmount() {
        clearTimeout(this._marqueeTimer);
    }

    render() {
        const {prefixCls, className, text} = this.props;
        const style = {
            position: 'relative',
            right: this.state.animatedWidth,
            whiteSpace: 'nowrap',
            display: 'inline-block',
            ...this.props.style,
        };
        return (
          <div
            className={`${prefixCls}-marquee-wrap ${className}`}
            style={{overflow: 'hidden'}}
            role="marquee"
          >
              <div
                ref={el => (this.textRef = el)}
                className={`${prefixCls}-marquee`}
                style={style}
              >
                  {text}
              </div>
          </div>
        );
    }

    _startAnimation() {
        if (this._marqueeTimer) {
            window.clearTimeout(this._marqueeTimer);
        }
        const fps = this.props.fps;
        const TIMEOUT = 1 / fps * 1000;
        const isLeading = this.state.animatedWidth === 0;
        const timeout = isLeading ? this.props.leading : TIMEOUT;

        const animate = () => {
            const {overflowWidth} = this.state;
            let animatedWidth = this.state.animatedWidth + 1;
            const isRoundOver = animatedWidth > overflowWidth;

            if (isRoundOver) {
                if (this.props.loop) {
                    animatedWidth = 0;
                } else {
                    return;
                }
            }

            if (isRoundOver && this.props.trailing) {
                this._marqueeTimer = window.setTimeout(() => {
                    this.setState({
                        animatedWidth,
                    });

                    this._marqueeTimer = window.setTimeout(animate, TIMEOUT);
                }, this.props.trailing);
            } else {
                this.setState({
                    animatedWidth,
                });

                this._marqueeTimer = window.setTimeout(animate, TIMEOUT);
            }
        };

        if (this.state.overflowWidth !== 0) {
            this._marqueeTimer = window.setTimeout(animate, timeout);
        }
    }

    _measureText() {
        const container = ReactDOM.findDOMNode(this);
        const node = this.textRef;
        if (container && node) {
            const containerWidth = container.offsetWidth;
            const textWidth = node.offsetWidth;
            const overflowWidth = textWidth - containerWidth;
            if (overflowWidth !== this.state.overflowWidth) {
                this.setState({
                    overflowWidth,
                });
            }
        }
    }
}

Marquee.propTypes = propTypes;
Marquee.defaultProps = defaultProps;
export {
    propTypes as MarqueeProps
};
export default Marquee;
