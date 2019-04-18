import React from 'react';
import {Link, Route} from 'react-router-dom';
import {List, WingBlank} from 'hehe-mobile';

import WrapView from './WrapView';

import FlexView from './FlexView';
import WingBlankView from './WingBlankView';
import WhiteSpaceView from './WhiteSpaceView'

import ListView from './ListView';
import BadgeView from './BadgeView';
import CardView from './CardView';

import ButtonView from './ButtonView';
import CheckboxView from './CheckboxView';


const RouteNav = () => {
    const LayoutList = (
      <List renderHeader={'Layout'}>
          <Link to='/flex'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  Flex 布局
              </List.Item>
          </Link>
          <Link to='/wing_blank'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  WingBlank 两翼留白
              </List.Item>
          </Link>
          <Link to='/white_space'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  WhiteSpace 上下留白
              </List.Item>
          </Link>
      </List>
    );
    const DataDisplayList = (
      <List renderHeader={'Data-Display'}>
          <Link to='/list'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  list 列表
              </List.Item>
          </Link>
          <Link to='/badge'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  badge 角标
              </List.Item>
          </Link>
          <Link to='/card'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  card 卡片
              </List.Item>
          </Link>
      </List>
    );
    const DataEntryList = (
      <List renderHeader={'Data-Entry'}>
          <Link to='/button'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  button 按钮
              </List.Item>
          </Link>
          <Link to='/checkbox'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  checkbox 复选框
              </List.Item>
          </Link>
      </List>
    );
    return (
      <Route path='/' exact render={() => {
          return (
            <>
                {LayoutList}
                {DataDisplayList}
                {DataEntryList}
            </>
          );
      }}/>
    );
};
const RouteContent = () => {
    const LayoutContent = (
      <>
          <Route path='/flex' render={(props) => {
              console.log(props);
              return (<WrapView title='Flex' component={FlexView}/>);
          }}/>
          <Route path='/wing_blank' render={() => {
              return (<WrapView title='WingBlank' component={WingBlankView}/>);
          }}/>
          <Route path='/white_space' render={() => {
              return (<WrapView title='WhiteSpace' component={WhiteSpaceView}/>);
          }}/>
      </>
    );
    const DataDisplayContent = (
      <>
          <Route path='/list' render={() => {
              return (<WrapView title='List' component={ListView}/>);
          }}/>
          <Route path='/badge' render={() => {
              return (<WrapView title='badge' component={BadgeView}/>);
          }}/>
          <Route path='/card' render={() => {
              return (<WrapView title='card' component={CardView}/>);
          }}/>
      </>
    );
    const DataEntryContent = (
      <>
          <Route path='/button' render={() => {
              return (<WrapView title='Button' component={ButtonView}/>);
          }}/>
          <Route path='/checkbox' render={() => {
              return (<WrapView title='checkbox' component={CheckboxView}/>);
          }}/>
      </>
    );
    return (
      <>
          {LayoutContent}
          {DataDisplayContent}
          {DataEntryContent}
      </>
    );
};
const HomeView = () => {
    return (
      <WingBlank size='md'>
          <RouteNav/>
          <RouteContent/>
      </WingBlank>
    );

};
export default HomeView




