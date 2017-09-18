import React from 'react';
import { NavLink } from 'react-router-dom'


const GameDetailsPage = ({ match }) => (
	<div>
		<h5>Game #{match.params.gameId} details</h5>
	  <nav className="context-nav">
	    <NavLink to={`${match.params.gameId}/edit`} exact activeClassName="active">Edit Game</NavLink>
	  </nav>
  </div>
)

export default GameDetailsPage;