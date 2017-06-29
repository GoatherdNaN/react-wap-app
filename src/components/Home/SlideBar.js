import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.less'
// import NavEvent from "./navEvent"

const tabArr=['推荐','热点','社会','娱乐','科技','汽车','体育','财经','军事','国际','时尚'];
export default class Index extends React.Component {
  constructor(...props) {
      super(...props)
  }
  state={
    selectedCategory:0
  }
  selectCategory=(e,selectedCategory)=>{
    this.setState({
      selectedCategory
    })
  }
  render() {
    let {selectedCategory} = this.state;
    return (
        <ul className={styles['slide-container']} ref='slideBar'>
          {
            tabArr.map((item, index) => (
                <li key={index} className={selectedCategory==index?styles['activeLi']:''} onClick={(e)=>{this.selectCategory(e,index)}}>
                    {item}
                </li>
            ))
          }
        </ul>
    );
  }
}


// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
