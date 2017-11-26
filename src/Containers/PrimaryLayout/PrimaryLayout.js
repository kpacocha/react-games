import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { logout } from '../../utils/xhr'
import RaisedButton from 'material-ui/RaisedButton';

// Sub Layouts
import UserSubLayout from '.././UserSubLayout/UserSubLayout'
import GameSubLayout from '.././GameSubLayout/GameSubLayout'
import PlaySubLayout from '.././PlaySubLayout/PlaySubLayout'

import './PrimaryLayout.css';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout site">
    <Header />
    <main className="site-content">
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={UserSubLayout} />
        <Route path={`${match.path}/games`} component={GameSubLayout} />
        <Route path={`${match.path}/plays`} component={PlaySubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
    <footer>
      Copyright
    </footer>
  </div>
)

export default PrimaryLayout




const AppHomePage = ({ history }) => (
  <div>
    <RaisedButton label="Logout" primary={true} onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }} />
  </div>
)