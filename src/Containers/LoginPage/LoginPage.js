import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../utils/xhr'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const LoginPage = ({ history }) => (
  <div>
    <Paper>
    <h1>Login Page</h1>
    <p>
      For this example application, we cannot visit <Link to="/app">/app</Link> until we are logged in.
      Clicking the "Login" button will simulate a login by setting Redux state.
    </p>

    <RaisedButton label="Login" primary={true} onClick={() => {
      login().then(() => {
        history.push('/app')
      })
    }} />

    </Paper>
  </div>
)

export default LoginPage