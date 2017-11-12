import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import './Header.css';

export default class Header extends Component {
  __renderHeader() {
  	return (
  		<Toolbar>
  			<ToolbarTitle text="Save Your Result" />
        <ToolbarGroup lastChild={true}>
        	<MenuItem primaryText="Home" href="/app" />
        	<MenuItem primaryText="Users" href="/app/users" />
        	<MenuItem primaryText="Games" href="/app/games" />
        	<MenuItem primaryText="Plays" href="/app/plays" />
          <ToolbarSeparator />
          <RaisedButton label="Add new play" primary={true} href="/app/plays/add" />
        </ToolbarGroup>
      </Toolbar>
  	);
  }

  render() {
    return (
		  this.__renderHeader()
    );
  }
}
