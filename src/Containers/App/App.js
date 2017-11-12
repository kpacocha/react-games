import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AuthorizedRoute from '../../AuthorizedRoute'
import store from '../../store'

// Layouts
import UnauthorizedLayout from '../UnauthorizedLayout/UnauthorizedLayout';
import PrimaryLayout from '../PrimaryLayout/PrimaryLayout';

const App = props => (
	<MuiThemeProvider>
	  <Provider store={store}>
	    <BrowserRouter>
	      <Switch>
	        <Route path="/auth" component={UnauthorizedLayout} />
	        <AuthorizedRoute path="/app" component={PrimaryLayout} />
	        <Redirect to="/auth" />
	      </Switch>
	    </BrowserRouter>
	  </Provider>
  </MuiThemeProvider>
)

export default App;