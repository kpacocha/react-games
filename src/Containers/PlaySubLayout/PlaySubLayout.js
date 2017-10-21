import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import PlaysPage from '../PlaysPage/PlaysPage'
import PlayDetailsPage from '../PlayDetailsPage/PlayDetailsPage'
import PlayAddPage from '../PlayAddPage/PlayAddPage'
import PlayEditPage from '../PlayEditPage/PlayEditPage'

const PlaySubLayout = ({ match }) => (
  <div className="user-sub-layout">
    
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={PlaysPage} />
        <Route path={`${match.path}/add`} exact component={PlayAddPage} />
        <Route path={`${match.path}/:playId/edit`}  component={PlayEditPage} />
        <Route path={`${match.path}/:playId`}  component={PlayDetailsPage} />
      </Switch>
    </div>
  </div>
)

export default PlaySubLayout

// <aside>
//       <nav>
//         <NavLink to={`${match.path}/add`} activeClassName="active">Add new play</NavLink>
//       </nav>
//     </aside>