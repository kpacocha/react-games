import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route exact path={match.path} component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} component={AddUserPage} />
        <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
        <Route path={`${match.path}/:userId`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
)

const BrowseUsersPage = () => <div>Users Page</div>

const UserProfilePage = props => 
<div>
  <h3>User #{props.match.params.userId} details</h3>
  <div>
    <Link to={ '/users/' + props.match.params.userId + '/edit'}>Edit user</Link>
  </div>
</div>

const UserNav=() => 
<div> Users Menu
  <ul>
    <li><Link to="/users/add">Add user</Link></li>
  </ul>
</div>

const AddUserPage = () => <div>Add new user</div>
const EditUserPage = props => <div><h3>Edit user  #{props.match.params.userId}</h3></div>

export default UserSubLayout;
