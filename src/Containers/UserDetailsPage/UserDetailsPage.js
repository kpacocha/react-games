import React from 'react';
import { NavLink } from 'react-router-dom'


const UserDetailsPage = ({ match }) => (
	<div>
		<h5>User #{match.params.userId} details</h5>
	  <nav className="context-nav">
	    <NavLink to={`${match.params.userId}/edit`} exact activeClassName="active">Edit user</NavLink>
	  </nav>
  </div>
)

export default UserDetailsPage;