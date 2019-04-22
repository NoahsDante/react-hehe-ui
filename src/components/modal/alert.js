import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from './modal';

const propTypes = {};
const defaultProps = {};
const AlertElement = React.forwardRef((props, ref) => {
    return (<div>ddddd</div>);
});
AlertElement.propTypes = propTypes;
AlertElement.defaultProps = defaultProps;

const Alert = () => {
    Alert.wrapDiv = document.createElement('div');
    document.body.append(Alert.wrapDiv);

    return ReactDOM.render(<AlertElement/>, Alert.wrapDiv);

};

Alert.close = () => {
    ReactDOM.unmountComponentAtNode(Alert.wrapDiv);
    if (Alert.wrapDiv && Alert.wrapDiv.parentNode) {
        Alert.wrapDiv.parentNode.removeChild(Alert.wrapDiv);
    }
};
export default Alert;