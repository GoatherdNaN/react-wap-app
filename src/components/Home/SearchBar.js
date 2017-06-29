
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Index extends React.Component {
  state = {
    value: ''
  };
  handleChange= (value) => {
    console.log(value, 'onChange');
    this.setState({ value });
  };
  handleClear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (
      <SearchBar
        placeholder="搜索"
        onChange={this.handleChange}
        onCancel={this.handleClear}
      />
    )
  }
}
