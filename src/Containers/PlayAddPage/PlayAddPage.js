
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import config from '../../config';

// TODO: change bind to arrow

const log = (type) => console.log.bind(console, type);

export default class PlayAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	games: [],
    	users: [],
      data: {
        gameId: null,
        results: 
        [
          {
            userId: 1,
            result: 23
          }
        ]
      }
    };

  }

  componentWillMount(){
    this.__getGames();
    this.__getUsers();
  }

  __getGames() {
  	fetch(config.api.games)
      .then((response) => {
        return response.json()
      })
      .then((games) => {
        this.setState({ 
          games
        })
      })
  }

  __getUsers() {
  	fetch(config.api.users)
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ users })
      })
  }

  __addPlay = (data) => {
    console.log(data.formData);

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch(config.api.playsAdd, fetchData)
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('added')
        console.log(json);

        //this.setState({info: `Post #${json.id} was saved.`})
      });
  }

  handleChange = (event, index, value) => {
    const data = {...this.state.data};
    data.gameId = value;
    this.setState({ data });
  }

  __renderGame(game,index) {
    return (
      <div>{game.gameName}</div>
    );
  }

  __addResult = () => {
    const data = {...this.state.data};
    data.results.push({
      userId: null,
      result: null
    });
    this.setState({ data });
  }

  render() {
    console.log(this.state.data);

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

