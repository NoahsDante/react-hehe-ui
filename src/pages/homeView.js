import React from 'react';
import {Link, Route} from 'react-router-dom';
import {List, WingBlank} from 'hehe-mobile';

import WrapView from './WrapView';

import FlexView from './FlexView';
import WingBlankView from './WingBlankView';
import WhiteSpaceView from './WhiteSpaceView'

import DrawerView from './DrawerView';
import NoticeBarView from './NoticeBarView';
import TabsView from './TabsView';

import ListView from './ListView';
import BadgeView from './BadgeView';
import CardView from './CardView';
import GridView from "./GridView";
import TagView from "./TagView";

import ButtonView from './ButtonView';
import CheckboxView from './CheckboxView';
import RadioView from './RadioView';
import SearchBarView from './SearchBarView';
import StepperView from './StepperView';
import SwitchView from './SwitchView';

import ModalView from './ModalView';
import ToastView from './ToastView';

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
    const NavigationList = (
      <List renderHeader={'Navigation'}>
          <Link to='/drawer'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  drawer 抽屉
              </List.Item>
          </Link>
          <Link to='/noticeBar'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  noticeBar 通告栏
              </List.Item>
          </Link>
          <Link to='/tabs'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  tabs 标签页
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
          <Link to='/grid'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  grid 卡片
              </List.Item>
          </Link>
          <Link to='/tag'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  tag 标签
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
          <Link to='/radio'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  radio 单选框
              </List.Item>
          </Link>
          <Link to='/searchBar'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  searchBar 搜索栏
              </List.Item>
          </Link>
          <Link to='/stepper'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  stepper 步进器
              </List.Item>
          </Link>
          <Link to='/switch'>
              <List.Item arrow='horizontal' onClick={() => {
              }}>
                  switch 滑动开关
              </List.Item>
          </Link>
      </List>
    );
    const feedback = (
        <List renderHeader={'feedback'}>
            <Link to='/modal'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    modal 对话框
                </List.Item>
            </Link>
            <Link to='/toast'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    toast 提示框
                </List.Item>
            </Link>
        </List>
    );

    return (
      <Route path='/' exact render={() => {
          return (
            <>
                {LayoutList}
                {NavigationList}
                {DataDisplayList}
                {DataEntryList}
                {feedback}
            </>
          );
      }}/>
    );
};
const RouteContent = () => {
    const LayoutContent = (
      <>
          <Route path='/flex' render={() => {
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
    const NavigationContent = (
      <>
          <Route path='/drawer' render={() => {
              return (<WrapView title='Drawer' component={DrawerView}/>);
          }}/>
          <Route path='/noticeBar' render={() => {
              return (<WrapView title='noticeBar' component={NoticeBarView}/>);
          }}/>
          <Route path='/tabs' render={() => {
              return (<WrapView title='tabs' component={TabsView}/>);
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
          <Route path='/grid' render={() => {
              return (<WrapView title='grid' component={GridView}/>);
          }}/>
          <Route path='/tag' render={() => {
              return (<WrapView title='tag' component={TagView}/>);
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
          <Route path='/radio' render={() => {
              return (<WrapView title='radio' component={RadioView}/>);
          }}/>
          <Route path='/searchBar' render={() => {
              return (<WrapView title='searchBar' component={SearchBarView}/>);
          }}/>
          <Route path='/stepper' render={() => {
              return (<WrapView title='stepper' component={StepperView}/>);
          }}/>
          <Route path='/switch' render={() => {
              return (<WrapView title='switch' component={SwitchView}/>);
          }}/>
      </>
    );
    const feedbackContent = (
        <>
            <Route path='/modal' render={() => {
                return (<WrapView title='modal' component={ModalView}/>);
            }}/>
            <Route path='/toast' render={() => {
                return (<WrapView title='modal' component={ToastView}/>);
            }}/>
        </>
    );
    return (
      <>
          {LayoutContent}
          {NavigationContent}
          {DataDisplayContent}
          {DataEntryContent}
          {feedbackContent}
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




