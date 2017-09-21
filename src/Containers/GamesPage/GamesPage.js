import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const games = [
	{
	id: 0,
	name: 'Carcassone',
	dateAdd: '2017-09-25'
	},{
	id: 1,
	name: 'Obóz ninja',
	dateAdd: '2017-09-25'
	},{
	id: 2,
	name: 'Pory roku',
	dateAdd: '2017-09-25'
	},{
	id: 4,
	name: 'Cytadela',
	dateAdd: '2017-09-25'
	}
]

export default class GamesPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    games: games
	  };
	}

	__renderGame(game) {
		return(
			<tr key={game.id}>
				<td>
					<Link to={`${this.props.match.path}/${game.id}`}>{game.id}</Link>
				</td>
				<td>
					<Link to={`${this.props.match.path}/${game.id}`}>{game.name}</Link>
				</td>
				<td>
					<Link to={`${this.props.match.path}/${game.id}`}>{game.dateAdd}</Link>
				</td>
			</tr>
			
		);
	}

  __renderTable() {
  	console.log(this.state.games);
  	return(
	    <div>
		    <h3>Browse Games</h3>

		    <table>
		    	<tbody>
		    		<tr>
		    			<th></th>
		    			<th>Name</th>
		    			<th>Date of add</th>
		    		</tr>
		    	{this.state.games.map(game => this.__renderGame(game))}
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
