import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

export default class Header extends Component {

  __renderMenu() {
  	return(
	    <header className="header">
		    <h1>Save Your Result</h1>
		    <nav>
		    	<ul className="header-menu">
		    		<li className="header-menu-item">
		    			<NavLink to="/app" exact activeClassName="active">Home</NavLink>
		    		</li>
		    		<li className="header-menu-item">
		    			<NavLink to="/app/users" activeClassName="active">Users</NavLink>
		    		</li>
		    		<li className="header-menu-item">
		    			<NavLink to="/app/games" activeClassName="active">Games</NavLink>
		    		</li>
		    		<li className="header-menu-item">
		    			<NavLink to="/app/plays" activeClassName="active">Plays</NavLink>
		    		</li>
		    		<li className="header-menu-item">
		    			<NavLink to="/app/plays/add" activeClassName="active">Add new play</NavLink>
		    		</li>
		    	</ul>
		    </nav>
		  </header>
  	);
  }

  render() {
    return (
		  this.__renderMenu()
    );
  }
}
