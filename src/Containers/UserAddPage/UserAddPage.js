import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Form from 'react-jsonschema-form';
import config from '../../config';

// TODO: change bind to arrow, use jsonschemaform
const schema = {
  title: "New user",
  type: "object",
  required: ["login", "login", "email"],
  properties: {
    login: {type: "string", title: "Login"},
    name: {type: "string", title: "Name"},
    email: {type: "string", title: "Email"}
  }
};

const uiSchema = {};

const log = (type) => console.log.bind(console, type);

export default class UserAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  __addUser = (data) => {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch(config.api.usersAdd, fetchData)
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('added')

        //this.setState({info: `Post #${json.id} was saved.`})
      });
  }

  render() {
    return (
    	<div>
	    	<div>Add new user</div>

        <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={this.__addGame}
        onError={log("errors")} />

    	</div>
    );
  }
}

