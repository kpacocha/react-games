import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import fetch from 'isomorphic-fetch';
import TableCustom from '../../Components/TableCustom/TableCustom';

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
  	const headers = ['Login', 'User name', 'Email', 'Played games', 'Win games'];
  	return(
	    <TableCustom headers={headers}>
		    	{this.state.users && this.state.users.map(user => this.__renderUser(user))}
		    </TableCustom>
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
