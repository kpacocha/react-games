import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import UserNav from '../../Components/UserNav/UserNav';

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} exact component={AddUserPage} />
        <Route path={`${match.path}/:userId/edit`}  component={EditUserPage} />
        <Route path={`${match.path}/:userId`}  component={UserProfilePage} />
      </Switch>

    </div>
  </div>
)


const BrowseUsersPage = ({ match }) => (
  <div>
    Browse Users
    <ul>
      <li><Link to={`${match.path}/1`}>Brad</Link></li>
      <li><Link to={`${match.path}/2`}>Chris</Link></li>
      <li><Link to={`${match.path}/3`}>Michael</Link></li>
      <li><Link to={`${match.path}/4`}>Ryan</Link></li>
    </ul>
  </div>
)

const UserProfilePage2 = props => 
<div>
  <h3>User #{props.match.params.userId} details</h3>
  <div>
    <Link to={ '/users/' + props.match.params.userId + '/edit'}>Edit user</Link>
  </div>

</div>

const UserProfilePage = ({ match }) => (
  <nav className="context-nav">
    <NavLink to={`${match.params.userId}/edit`} exact activeClassName="active">Edit user</NavLink>
  </nav>
)


const AddUserPage = () => <div>Add new user</div>
const EditUserPage = props => <div><h3>Edit user  #{props.match.params.userId}</h3></div>

export default UserSubLayout;
