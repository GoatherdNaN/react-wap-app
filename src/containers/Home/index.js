import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'components/Home/Carousel'
import SearchBar from 'components/Home/SearchBar'
import GridMenu from 'components/Home/GridMenu'
import SlideBar from 'components/Home/SlideBar'
import NewsList from 'components/Home/NewsList'
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
  state = {

  }
  render() {
    return (
      <div>
        <SearchBar/>
        <Carousel />
        <GridMenu/>
        <SlideBar/>
        <NewsList/>
      </div>
    );
  }
}


// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
