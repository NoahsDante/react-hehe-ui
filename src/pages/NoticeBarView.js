import React from 'react';
import {List, Badge} from 'hehe-mobile';


const ButtonView = () => {
    return (
      <List>
          <List.Item extra="extra content" arrow="horizontal">
              <Badge dot>
                  <span style={{width: '26px', height: '26px', background: '#ddd', display: 'inline-block'}}/>
              </Badge>
              <span style={{marginLeft: 12}}>Dot badge</span>
          </List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
            extra={<Badge text={77} overflowCount={55}/>}
            arrow="horizontal"
          >
              Content
          </List.Item>
          <List.Item className="special-badge" extra={<Badge text={'促'}/>}>
              Custom corner
          </List.Item>
          <List.Item extra="extra" arrow="horizontal">
              <Badge text={0} style={{marginLeft: 12}}>Text number 0</Badge>
              <Badge text={'new'} style={{marginLeft: 12}}/>
          </List.Item>
          <List.Item>
              Marketing:
              <Badge text="减" hot style={{marginLeft: 12}}/>
              <Badge text="惠" hot style={{marginLeft: 12}}/>
              <Badge text="免" hot style={{marginLeft: 12}}/>
              <Badge text="反" hot style={{marginLeft: 12}}/>
              <Badge text="HOT" hot style={{marginLeft: 12}}/>
          </List.Item>
          <List.Item>

          </List.Item>
      </List>
    );
}
export default ButtonView;