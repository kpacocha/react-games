import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import TableCustom from '../../Components/TableCustom/TableCustom';

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

  __onClickRow() {
		console.log('row click');
	}


	__renderGame(game) {
		return(
			<TableRow
				key={game.gameId}
				onClick={()=> {alert('Click event on row')}}	>
				<TableRowColumn>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.gameId}</Link>
				</TableRowColumn>
				<TableRowColumn>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.gameName}</Link>
				</TableRowColumn>
				<TableRowColumn>
					<Link to={`${this.props.match.path}/${game.gameId}`}>
						{parseTimestamp(game.addingDate)}
					</Link>
				</TableRowColumn>
				<TableRowColumn>
					<Link to={`${this.props.match.path}/${game.gameId}`}>{game.count}</Link>
				</TableRowColumn>
			</TableRow>
			
		);
	}

  __renderTable() {
  	const headers = ['Name', 'Date of add', 'Added plays'];
  	return(
	    <TableCustom headers={headers}>
	    	{this.state.games && this.state.games.map(game => this.__renderGame(game))}
	    </TableCustom>
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
