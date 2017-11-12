import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import Table from 'material-ui/Table';

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
      	console.log(games);
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

		    <Table hoverable responsive bordered>

		    	<thead>
		    		<tr>
		    			<th></th>
		    			<th>Name</th>
		    			<th>Date of add</th>
		    			<th>Added plays</th>
		    		</tr>
		    	</thead>
		    	<tbody>
		    	{this.state.games && this.state.games.map(game => this.__renderGame(game))}
		    	</tbody>
		    </Table>
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
