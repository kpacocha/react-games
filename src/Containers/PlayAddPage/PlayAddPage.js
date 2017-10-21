
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';

// TODO: change bind to arrow, use jsonschemaform

const log = (type) => console.log.bind(console, type);

export default class PlayAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	games: [],
    	users: []
    };

  }

  componentWillMount(){
    this.__getGames();
    this.__getUsers();
  }

  __getGames() {
  	fetch('http://localhost:3001/games')
      .then((response) => {
        return response.json()
      })
      .then((games) => {
        this.setState({ games })
      })
  }

  __getUsers() {
  	fetch('http://localhost:3001/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ users })
      })
  }

  __addPlay = (data) => {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/addPlay', fetchData)
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('added')
        console.log(json);

        //this.setState({info: `Post #${json.id} was saved.`})
      });
  }

  render() {
  	const schema = {
		  title: "New play",
		  type: "object",
		  required: ["gameId", "results"],
		  properties: {
		    gameId: {
		    	type: "number",
		    	title: "Game name",
		    	enum: this.state.games.map(game => game.gameId),
		      enumNames: this.state.games.map(game => game.gameName)
		    },
		    results: {
		    	type: "array",
		    	title: "Players and their results",
		    	items: {
		    		type: "object",
		    		required: ["userId", "result"],
		    		properties: {
		    			userId: {
		    				type: "number",
		    				title: "Player name",
		    				enum: this.state.users.map(user => user.userId),
		      			enumNames: this.state.users.map(user => user.userName)
		    			},
		    			result: {type: "number", title: "Result"}
		    		}
		    	}
		    }
		  }
		};

		const uiSchema = {
		  "gameId": {
		    "ui:widget": "select"
		  }
		};

    return (
    	<div>
	    	<h6>Add new play page</h6>

	    	<Form schema={schema}
				    	uiSchema={uiSchema}
			        onChange={log("changed")}
			        onSubmit={this.__addPlay}
			        onError={log("errors")}
			        className="form" 
        />

    	</div>
    );
  }
}

        // <Form schema={schema}
        // uiSchema={uiSchema}
        // onChange={log("changed")}
        // onSubmit={this.__addGame}
        // onError={log("errors")} />