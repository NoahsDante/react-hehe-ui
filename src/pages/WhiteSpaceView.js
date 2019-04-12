import React from 'react';
import {Flex, WhiteSpace} from 'hehe-mobile';

const Block = (poops) => {
    const style = {
        width: '100px',
        height: '50px',
        backgroundColor: '#ff4e74',
    }
    return (
        <div {...poops} style={style}></div>
    )
}
const WhiteSpaceView = () => {
    return (
        <>
            <Block/>
            <WhiteSpace size='sm'/>
            <Block/>
            <WhiteSpace size='md'/>
            <Block/>
            <WhiteSpace size='lg'/>
            <Block/>
            <WhiteSpace size='xl'/>
            <Block/>
        </>

    );
};
export default WhiteSpaceView