import React from 'react';
import { NavLink } from 'react-router-dom'


const PlayDetailsPage = ({ match }) => (
	<div>
		<h5>Play #{match.params.playId} details</h5>
	  <nav className="context-nav">
	    <NavLink to={`${match.params.playId}/edit`} exact activeClassName="active">Edit Play</NavLink>
	  </nav>
  </div>
)

export default PlayDetailsPage;