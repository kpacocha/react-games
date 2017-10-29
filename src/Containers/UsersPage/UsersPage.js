import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

export default class UsersPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    users: []
	  };
	}

	componentWillMount(){
    fetch('http://localhost:3001/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ users })
      })
  }

	__renderUser(user) {
		return(
			<tr key={user.userId}>
				<td>
					<Link to={`${this.props.match.path}/${user.userId}`}>{user.userId}</Link>
				</td>
				<td>
					{user.login}
				</td>
				<td>
					{user.userName}
				</td>
				<td>
					{user.email}
				</td>
				<td>
					{user.finishedPlays}
				</td>
				<td>
					{user.winPlays}
				</td>
			</tr>
			
		);
	}

  __renderTable() {

  	return(
	    <div>
		    <h3>Browse Users</h3>

		    <table>
		    	<tbody>
		    		<tr>
		    			<th></th>
		    			<th>Login</th>
		    			<th>User name</th>
		    			<th>Date of add</th>
		    		</tr>
		    	{this.state.users && this.state.users.map(user => this.__renderUser(user))}
		    	</tbody>
		    </table>
		  </div>
  	);
  }

  render() {
    return (
    	<div className="UsersPage">
		    {this.__renderTable()}
		  </div>
    );
  }
}
