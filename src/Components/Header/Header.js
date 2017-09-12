import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
      	Header
      	<h2>{this.props.title}</h2>
      </div>
    );
  }
}