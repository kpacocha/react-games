import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom'
import { parseTimestamp } from '../../utils/parseTimestamp'
import TableCustom from '../../Components/TableCustom/TableCustom';

import './PlaysPage.css';

export default class PlaysPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    plays: []
	  };
	}

	componentWillMount(){
    fetch('http://localhost:3001/plays')
      .then((response) => {
        return response.json()
      })
      .then((plays) => {
        this.setState({ plays })
      })
  }

	__renderplay(play, index) {
		const results = JSON.parse(`[${play.results}]`);
		console.log(results);
		console.log(play.winner);
		return(
			<tr key={play.playId}>
				<td>
					<Link to={`${this.props.match.path}/${play.playId}`}>{index}</Link>
				</td>
				<td>
					<NavLink to={`games/${play.gameId}`} activeClassName="active">{play.gameName}</NavLink>
				</td>
				<td>
					{results.map(result => {
						return(
							<div className={classNames({ 'winner': result.userId === play.winner })}>
								<NavLink to={`users/${result.userId}`} activeClassName="active">{result.login}</NavLink>
								 - {result.result}
							</div>
							)
					})}
				</td>
				<td>
					{parseTimestamp(play.date)}
				</td>
			</tr>
			
		);
	}

  __renderTable() {
  	const headers = ['Game name', 'Players', 'Date'];
  	return(
	    <TableCustom headers={headers}>
	    	{this.state.plays && this.state.plays.map((play,index) => this.__renderplay(play,index))}
	    </TableCustom>
  	);
  }

  render() {
    return (
    	<div className="playsPage">
		    {this.__renderTable()}
		  </div>
    );
  }
}
