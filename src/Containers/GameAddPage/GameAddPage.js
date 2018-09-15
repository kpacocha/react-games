import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';
import config from '../../config';

// TODO: change bind to arrow, use jsonschemaform
const schema = {
  title: "New game",
  type: "object",
  required: ["gameName"],
  properties: {
    gameName: {type: "string", title: "Game name"},
    addingDate: {
      type: "string",
      title: "Adding date",
      format: "date-time"
    }
  }
};

const uiSchema = {
  "addingDate": {
    "ui:widget": "alt-datetime"
  }
};

const log = (type) => console.log.bind(console, type);

export default class GameAddPage extends Component {
  __addGame = (data) => {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch(config.api.gamesAdd, fetchData)
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('added')
      });
  }

  render() {
    return (
    	<div>
	    	<div>Add new game</div>

        <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={this.__addGame}
        onError={log("errors")} />

    	</div>
    );
  }
}

