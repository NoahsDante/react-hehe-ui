import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const ContentMain = React.forwardRef(({className, ...props}, ref) => {

    return (<div {...props} className={classNames('content-padded', className)} ref={ref}></div>);
});
ContentMain.propTypes = {
    className: PropTypes.string
};
ContentMain.defaultProps = {};

export default ContentMain