import React from 'react';
import {Flex, WingBlank} from 'hehe-mobile';

const subTitle = {
    color: '#888',
    fontSize: '14px',
    padding: '30px 0 18px 0'
};
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
const WingBlankView = () => {
    return (
        <>
            <div style={subTitle}>
                size | 两翼留白的间距，可选`sm`,`md`,`lg` | string | `lg` |
            </div>
            <WingBlank size='sm'>
                <Flex>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </Flex>
            </WingBlank>
            <div style={subTitle}>
                size md
            </div>
            <WingBlank size='md'>
                <Flex>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </Flex>
            </WingBlank>
            <div style={subTitle}>
                size lg
            </div>
            <WingBlank size='lg'>
                <Flex>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </Flex>
            </WingBlank>
        </>

    );
};
export default WingBlankView