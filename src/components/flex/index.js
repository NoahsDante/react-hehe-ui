import React from 'react';
import PropTypes from 'prop-types';

const Flex = React.forwardRef(({...props},ref) => {

    return (<div {...props} ref={ref}>dddd</div>);
});
Flex.propTypes = {

}

Flex.defaultProps = {

}
export default Flex