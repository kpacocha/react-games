import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
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
			<TableRow key={user.userId} selectable={false}>
				<TableRowColumn>
					<Link to={`${this.props.match.path}/${user.userId}`}>{user.userId}</Link>
				</TableRowColumn>
				<TableRowColumn>
					{user.login}
				</TableRowColumn>
				<TableRowColumn>
					{user.userName}
				</TableRowColumn>
				<TableRowColumn>
					{user.email}
				</TableRowColumn>
				<TableRowColumn>
					{user.finishedPlays}
				</TableRowColumn>
				<TableRowColumn>
					{user.winPlays}
				</TableRowColumn>
			</TableRow>
			
		);
	}

  __renderTable() {

  	return(
	    <div>
		    <h3>Browse Users</h3>

		    <Table selectable={false}>
		    	<TableHeader>
		    		<TableRow>
		    			<TableHeaderColumn></TableHeaderColumn>
		    			<TableHeaderColumn>Login</TableHeaderColumn>
		    			<TableHeaderColumn>User name</TableHeaderColumn>
		    			<TableHeaderColumn>Date of add</TableHeaderColumn>
		    		</TableRow>
	    		</TableHeader>
	    		<TableBody>
		    	{this.state.users && this.state.users.map(user => this.__renderUser(user))}
		    	</TableBody>
		    </Table>
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
