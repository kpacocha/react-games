import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  __renderMenu() {
  	return(
	    <header className="primary-header">
		    <h1>Welcome to our app!</h1>
		    <nav>
		      <NavLink to="/app" exact activeClassName="active">Home</NavLink>
		      <NavLink to="/app/users" activeClassName="active">Users</NavLink>
		      <NavLink to="/app/games" activeClassName="active">Games</NavLink>
		    </nav>
		  </header>
  	);
  }

  render() {
    return (
    	<header className="primary-header">
		    {this.__renderMenu()}
		  </header>
    );
  }
}
