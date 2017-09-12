import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Header extends Component {

  __renderMenu() {
  	return(
  		<nav>
  		<ul>
	      <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            </ul>
	    </nav>
  	);
  }

  render() {
    return (
    	<header className="primary-header">
		    <h1>Welcome to our app! {this.props.title}</h1>
		    {this.__renderMenu()}
		  </header>
    );
  }
}