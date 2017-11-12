import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import GamesPage from '../GamesPage/GamesPage'
import GameDetailsPage from '../GameDetailsPage/GameDetailsPage'
import GameAddPage from '../GameAddPage/GameAddPage'
import GameEditPage from '../GameEditPage/GameEditPage'
import RaisedButton from 'material-ui/RaisedButton';

const GameNav = ({ match }) => (
  <div>
    <RaisedButton label="Add new game" primary={true} href={`${match.path}/add`} /> 
  </div>
);

const GameSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <GameNav match={match}/>
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={GamesPage} />
        <Route path={`${match.path}/add`} exact component={GameAddPage} />
        <Route path={`${match.path}/:gameId/edit`}  component={GameEditPage} />
        <Route path={`${match.path}/:gameId`}  component={GameDetailsPage} />
      </Switch>
    </div>
  </div>
)

export default withRouter(GameSubLayout)