

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';

// TODO: change bind to arrow, use jsonschemaform
const schema = {
  title: "New game",
  type: "object",
  required: ["gameName"],
  properties: {
    gameName: {type: "string", title: "Title"}
  }
};

const log = (type) => console.log.bind(console, type);

export default class GameAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  __addGame = (data) => {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/addGame', fetchData)
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('added')

        //this.setState({info: `Post #${json.id} was saved.`})
      });
  }

  render() {
    return (
    	<div>
	    	<div>Add new game</div>

        <Form schema={schema}
        onChange={log("changed")}
        onSubmit={this.__addGame}
        onError={log("errors")} />

    	</div>
    );
  }
}

