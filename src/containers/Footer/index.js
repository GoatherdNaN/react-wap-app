import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Browser} from 'utils/util'
// import PropTypes from 'prop-types';
// import styles from './style.less'
import { TabBar, Icon } from 'antd-mobile';

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => state,
    dispatch => bindActionCreators({}, dispatch)
)
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  componentDidMount=()=>{
    const tabBarDom = document.getElementsByClassName('am-tab-bar-bar')[0];
    const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(Browser.versions.mobile){
        tabBarDom.style.width='100%';
    } else {
      tabBarDom.style.maxWidth=viewHeight/16*9+'px';
    }
  }
  handlePress=selectedTab=>{
    let {history} = this.props.props;
    history.push('/'+selectedTab)
    this.setState({
      selectedTab
    })
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#70777C"
        tintColor="#f00"
        barTintColor="white"
      >
        {/**************************************首页************************************ */}
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<i className='icon-home3'></i>}
          selectedIcon={<i className='icon-home3'></i>}
          selected={this.state.selectedTab === 'home'}
          onPress={(selectedTab) => {this.handlePress('home')}}
          data-seed="logId"
        />
        {/**************************************电影************************************ */}
        <TabBar.Item
          title="电影"
          key="电影"
          icon={<i className='icon-dice'></i>}
          selectedIcon={<i className='icon-dice'></i>}
          selected={this.state.selectedTab === 'movie'}
          onPress={(selectedTab) => {this.handlePress('movie')}}
          data-seed="logId1"
        />
        {/**************************************发现************************************ */}
        <TabBar.Item
          title="发现"
          key="发现"
          icon={<i className='icon-compass2'></i>}
          selectedIcon={<i className='icon-compass2'></i>}
          selected={this.state.selectedTab === 'discover'}
          onPress={(selectedTab) => {this.handlePress('discover')}}
        />
        {/**************************************我的************************************ */}
        <TabBar.Item
          title="我的"
          key="我的"
          icon={<i className='icon-user'></i>}
          selectedIcon={<i className='icon-user'></i>}
          selected={this.state.selectedTab === 'mine'}
          onPress={(selectedTab) => {this.handlePress('mine')}}
        />
      </TabBar>
    );
  }
}

// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
