import React from 'react';
import {Tabs, WhiteSpace, Badge} from 'hehe-mobile';

const tabs1 = [
    {title: <Badge text={'3'}>First Tab</Badge>},
    {title: <Badge text={'今日(20)'}>Second Tab</Badge>},
    {title: <Badge dot>Third Tab</Badge>},
];

const tabs2 = [
    {title: 'First Tab', sub: '1'},
    {title: 'Second Tab', sub: '2'},
    {title: 'Third Tab', sub: '3'},
];
const tabs = [
    {title: 'First Tab'},
    {title: 'Second Tab'},
    {title: 'Third Tab'},
];
const tabs3 = [
    {title: '1st Tab'},
    {title: '2nd Tab'},
    {title: '3rd Tab'},
    {title: '4th Tab'},
    {title: '5th Tab'},
    {title: '6th Tab'},
    {title: '7th Tab'},
    {title: '8th Tab'},
    {title: '9th Tab'},
];

const renderContent = tab =>
  (<div
    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}}>
      <p>Content of {tab.title}</p>
  </div>);
const TabView = () => (
  <div>
      <Tabs tabs={tabs1}
            initialPage={1}
            onChange={(tab, index) => {
                console.log('onChange', index, tab);
            }}
            onTabClick={(tab, index) => {
                console.log('onTabClick', index, tab);
            }}
      >
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of first tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of second tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of third tab
          </div>
      </Tabs>
      <WhiteSpace/>
      <Tabs tabs={tabs2}
            initialPage={1}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
      >
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of first tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of second tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
          }}>
              Content of third tab
          </div>
      </Tabs>
      <WhiteSpace/>
      <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of first tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of second tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of third tab
          </div>
      </Tabs>
      <WhiteSpace/>
      <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of first tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of second tab
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
          }}>
              Content of third tab
          </div>
      </Tabs>
      <WhiteSpace/>
      <div style={{height: 200}}>
          <WhiteSpace/>
          <Tabs tabs={tabs}
                initalPage={'t2'}
                tabBarPosition="left"
                tabDirection="vertical"
          >
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '250px',
                  backgroundColor: '#fff'
              }}>
                  Content of first tab
              </div>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '250px',
                  backgroundColor: '#fff'
              }}>
                  Content of second tab
              </div>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '250px',
                  backgroundColor: '#fff'
              }}>
                  Content of third tab
              </div>
          </Tabs>
          <WhiteSpace/>
      </div>
      <WhiteSpace/>
      <div>
          <WhiteSpace/>
          <div style={{height: 200}}>
              <Tabs tabs={tabs}
                    initalPage={'t2'}
              >
                  <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '250px',
                      backgroundColor: '#fff'
                  }}>
                      Content of first tab
                  </div>
                  <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '250px',
                      backgroundColor: '#fff'
                  }}>
                      Content of second tab
                  </div>
                  <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '250px',
                      backgroundColor: '#fff'
                  }}>
                      Content of third tab
                  </div>
              </Tabs>
          </div>
      </div>
      <WhiteSpace/>
      <div>
          <WhiteSpace/>
          <Tabs tabs={tabs3} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}/>}>
              {renderContent}
          </Tabs>
          <WhiteSpace/>
      </div>
      <WhiteSpace/>
      <WhiteSpace/>

  </div>
);
export default TabView;