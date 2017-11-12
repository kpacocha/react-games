import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';


const UserNav = ({ match }) => (
	<div>
    <RaisedButton label="Add new user" primary={true} href={`${match.path}/add`} />	
  </div>
);

export default withRouter(UserNav)