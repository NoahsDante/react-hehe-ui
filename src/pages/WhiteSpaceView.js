import React from 'react';
import {WhiteSpace,Flex} from 'hehe-mobile';

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
            <Block>
            </Block>
            <WhiteSpace size='sm'/>
            <Block>
            </Block>
            <WhiteSpace size='md'/>
            <Block>
            </Block>
            <WhiteSpace size='lg'/>
            <Block>
            </Block>
        </>

    );
};
export default WhiteSpaceView