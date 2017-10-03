import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

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

	__renderplay(play) {
		return(
			<tr key={play.playId}>
				<td>
					<Link to={`${this.props.match.path}/${play.playId}`}>{play.playId}</Link>
				</td>
				<td>
					{play.date}
				</td>
				<td>
					{play.gameId}
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
		    			<th></th>
		    			<th>Date</th>
		    			<th>Game id</th>
		    		</tr>
		    	{this.state.plays && this.state.plays.map(play => this.__renderplay(play))}
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
