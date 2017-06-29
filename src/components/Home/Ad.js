import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.less'
export default class Index extends React.Component {
  state = {

  }
  render() {
    return (
      <ul>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
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
