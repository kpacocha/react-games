
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';

// TODO: change bind to arrow, use jsonschemaform
const schema = {
  title: "New play",
  type: "object",
  required: ["gameId", "results"],
  properties: {
    gameId: {type: "number", title: "Game id"},
    results: {
    	type: "array",
    	title: "Results",
    	items: {
    		type: "object",
    		properties: {
    			userId: {type: "number", title: "User Id"},
    			result: {type: "number", title: "Result"}
    		}
    	}
    }
  }
};

const log = (type) => console.log.bind(console, type);

export default class PlayAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  __addPlay = (data) => {
  	console.log('addPlay');
  	console.log(data);

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

  __addPlay2 = (data) => {
  	console.log(data);
  }

  render() {
    return (
    	<div>
	    	<h6>Add new play page</h6>

	    	<button onClick={this.__addPlay}>
	    	Add play
	    	</button>

	    	<Form schema={schema}
        onChange={log("changed")}
        onSubmit={this.__addPlay}
        onError={log("errors")} />



    	</div>
    );
  }
}

        // <Form schema={schema}
        // uiSchema={uiSchema}
        // onChange={log("changed")}
        // onSubmit={this.__addGame}
        // onError={log("errors")} />