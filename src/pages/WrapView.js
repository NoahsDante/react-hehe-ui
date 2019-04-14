import React from 'react';

const setViewTitle = (title) =>{
    document.title = title;
}
const WrapView = ({title,component,...props}) => {
    setViewTitle(title);
    const HOSComponent = component;
    return (<HOSComponent {...props}/>)
};
export default WrapView