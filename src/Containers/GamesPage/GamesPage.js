import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

import { parseTimestamp } from '../../utils/parseTimestamp'

export default class GamesPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    games: []
	  };
	}

	componentWillMount(){
    fetch('http://localhost:3001/games')
      .then((response) => {
        return response.json()
      })
      .then((games) => {
        this.setState({ games })
      })
  }

	__renderGame(game) {
		return(
			<tr key={game.gameId}>
				<td>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.gameId}</Link>
				</td>
				<td>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.gameName}</Link>
				</td>
				<td>
					<Link to={`${this.props.match.path}/${game.gameId}`}>
						{parseTimestamp(game.addingDate)}
					</Link>
				</td>
				<td>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.count}</Link>
				</td>
			</tr>
			
		);
	}



  __renderTable() {

  	return(
	    <div>
		    <h3>Browse Games</h3>

		    <table>
		    	<tbody>
		    		<tr>
		    			<th></th>
		    			<th>Name</th>
		    			<th>Date of add</th>
		    			<th>Added plays</th>
		    		</tr>
		    	{this.state.games && this.state.games.map(game => this.__renderGame(game))}
		    	</tbody>
		    </table>
		  </div>
  	);
  }

  render() {
    return (
    	<div className="GamesPage">
		    {this.__renderTable()}
		  </div>
    );
  }
}
