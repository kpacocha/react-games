import React from 'react'
import { login } from '../../utils/xhr'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './LoginPage.css';

const LoginPage = ({ history }) => (
  <div className="LoginPage">
  <Paper style={{padding: 20}}>
    <h3>Save Your Result</h3>
    <h3>Login-in to your account</h3>
    
      <TextField
        hintText="Login"
        fullWidth
      /><br />
      <br />
      <TextField
        hintText="Password"
        type="password"
        fullWidth

      /><br />


      <RaisedButton label="Login" primary={true} fullWidth onClick={() => {
        login().then(() => {
          history.push('/app')
        })
      }} />

    </Paper>
  </div>
)

export default LoginPage