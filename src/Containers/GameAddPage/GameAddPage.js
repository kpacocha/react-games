

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

// TODO: change bind to arrow, use jsonschemaform

export default class GameAddPage extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      gameName: this.state.value
    }

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
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

  __render_form() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Game Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    return (
    	<div>
	    	<div>Add new game</div>
	    	{this.__render_form() }
    	</div>
    );
  }
}

