import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import PersonIcon from 'material-ui/svg-icons/social/person';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import { logout } from '../../utils/xhr'

import './Header.css';

export default class Header extends Component {

	handleClick() {
	  alert('You clicked the Chip.');
	}

  __renderHeader() {
  	const userName = 'Kate';
  	return (
  		<Toolbar>
  			<ToolbarTitle text="Save Your Result" />
        <ToolbarGroup lastChild={true}>
        	<MenuItem primaryText="Home" href="/app" />
        	<MenuItem primaryText="Users" href="/app/users" />
        	<MenuItem primaryText="Games" href="/app/games" />
        	<MenuItem primaryText="Plays" href="/app/plays" />
          <ToolbarSeparator />

		      <IconMenu
			      iconButtonElement={<IconButton><PersonIcon /></IconButton>}
			      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
			      targetOrigin={{horizontal: 'left', vertical: 'top'}}
			    >
			    	<ListItem leftAvatar={<Avatar>{userName[0]}</Avatar>}> {userName} </ListItem>
			      <MenuItem primaryText="Details" />
			      <MenuItem primaryText="Log out" />
			    </IconMenu>

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
