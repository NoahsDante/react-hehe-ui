import React from 'react';
import {Flex, List} from 'hehe-mobile';

const subTitle = {
    color: '#888',
    fontSize: '14px',
    padding: '30px 0 18px 0'
};
const flexItem = {
    width: '100px',
    height: '50px',
    backgroundColor: '#ff4e74',
}
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
const FlexView = () => {
    return (
        <div className='flex-container'>
            <div style={subTitle}>
                direction | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`
            </div>
            <Flex direction='column'>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </Flex>
            <div style={subTitle}>
                wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`
            </div>
            <Flex wrap='wrap'>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </Flex>
            <div style={subTitle}>
                justify | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around` | String |
                `start` |
            </div>
            <Flex justify='between'>
                <Block/>
                <Block/>
                <Block/>
            </Flex>
            <div style={subTitle}>
                align | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch`
            </div>
            <Flex wrap='wrap' align='center'
                  style={{'height': '150px', backgroundColor: '#09bfff'}}>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </Flex>
            <div style={subTitle}>
                alignContent | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch` |
                String | `stretch` |
            </div>
            <Flex wrap='wrap' alignContent='center'
                  style={{'height': '150px', backgroundColor: '#09bfff'}}>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </Flex>
            <div style={subTitle}>
                Flex.Item 组件默认加上了样式`flex:1`,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item
            </div>
            <Flex>
                <Flex.Item style={flexItem}>
                </Flex.Item>
                <Flex.Item style={flexItem}>
                </Flex.Item>
                <Flex.Item style={flexItem}>
                </Flex.Item>
            </Flex>
        </div>

    );
};
export default FlexView