import React from 'react';
import {List} from 'hehe-mobile';

const WingBlankView = () => {
    return (
        <>
            <List renderHeader='基本'>
                <List.Item extra={'ddd'}>
                    title
                </List.Item>
            </List>
            <List
                renderHeader='thumb       | 缩略图(当为 string 类型时作为 img src)  | String/React.Element |  无  |'>
                <List.Item thumb='https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'>
                </List.Item>
            </List>
            <List
                renderHeader='arrow      | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示   | String |   无  |'>
                <List.Item arrow='horizontal' onClick={() => {}}>
                    箭头
                </List.Item>
            </List>
            <List renderHeader='error    | 报错样式,右侧文字颜色变成橙色 | Boolean  | `false`  |'>
                <List.Item extra={'哈哈'} error>
                    报错了
                </List.Item>
            </List>
            <List renderHeader={() => (
                <div>
                    multipleLine | 多行 | Boolean | `false` |
                    <br/>wrap | 是否换行，默认情况下，文字超长会被隐藏， | Boolean | `false` |
                </div>
            )
            }
            >
                <List.Item multipleLine wrap>
                    multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                    |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                    |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                    |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false` |
                </List.Item>
            </List>
            <List renderHeader='onClick    | 点击事件的回调函数 | (): void |  无  |'>
                <List.Item onClick={() => {
                    alert('s')
                }}>
                    你过来点我呀
                </List.Item>
            </List>
            <List renderHeader='List.Brief:辅助说明'>
                <List.Item>
                    title
                    <List.Brief>
                        SubTittle
                    </List.Brief>
                </List.Item>
            </List>
        </>

    );
};
export default WingBlankView