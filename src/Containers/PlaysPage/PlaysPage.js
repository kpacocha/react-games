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

	__renderplay(play, index) {
		return(
			<tr key={play.playId}>
				<td>
					<Link to={`${this.props.match.path}/${play.playId}`}>{index}</Link>
				</td>
				<td>
					{play.gameName}
				</td>
				<td>
					{play.results}
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
