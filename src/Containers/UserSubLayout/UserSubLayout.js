import React from 'react';
import { Route, Switch } from 'react-router-dom'

import UserNav from '../../Components/UserNav/UserNav';

import UsersPage from '../UsersPage/UsersPage'
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage'
import UserAddPage from '../UserAddPage/UserAddPage'
import UserEditPage from '../UserEditPage/UserEditPage'

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={UsersPage} />
        <Route path={`${match.path}/add`} exact component={UserAddPage} />
        <Route path={`${match.path}/:userId/edit`}  component={UserEditPage} />
        <Route path={`${match.path}/:userId`}  component={UserDetailsPage} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout;
