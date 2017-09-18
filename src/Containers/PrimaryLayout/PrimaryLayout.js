import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { logout } from '../../utils/xhr'

// Sub Layouts
import UserSubLayout from '.././UserSubLayout/UserSubLayout'
import GameSubLayout from '.././GameSubLayout/GameSubLayout'
import PlaySubLayout from '.././PlaySubLayout/PlaySubLayout'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <Header />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={UserSubLayout} />
        <Route path={`${match.path}/games`} component={GameSubLayout} />
        <Route path={`${match.path}/plays`} component={PlaySubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout




const AppHomePage = ({ history }) => (
  <div>
    App Home Page
    <br /><br />
    <button onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }}>Logout</button>
  </div>
)