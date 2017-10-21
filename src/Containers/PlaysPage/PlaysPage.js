import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames';

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
					{play.gameName}
				</td>
				<td>
					{results.map(result => {
						return(
							<div className={classNames({ 'winner': result.userId === play.winner })}>
								{result.login} - {result.result}
							</div>
							)
					})}
				</td>
				<td>
					{play.date}
				</td>
			</tr>
			
		);
	}

  __renderTable() {

  	return(
	    <div>
		    <h3>Browse plays</h3>

		    <table>
		    	<tbody>
		    		<tr>
		    			<th>Id</th>
		    			<th>Game name</th>
		    			<th>Players</th>
		    			<th>Date</th>
		    		</tr>
		    	{this.state.plays && this.state.plays.map((play,index) => this.__renderplay(play,index))}
		    	</tbody>
		    </table>
		  </div>
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
