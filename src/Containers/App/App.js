// import React from 'react';
// import Header from '../../Components/Header/Header';
// import UserSubLayout from '../UserSubLayout/UserSubLayout';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// const PrimaryLayout = () => (
//   <div className="primary-layout">
//     <Header title="my title"/>

//     <main>
//       <Switch>
//         <Route path="/" exact component={HomePage} /> />
//         <Route path="/users" component={UserSubLayout} />
//         <Redirect to="/" />
//       </Switch>
//     </main>
//   </div>
// )

// const HomePage =() => <div>Home Page</div>

// const App = () => (
//   <BrowserRouter>
//     <PrimaryLayout />
//   </BrowserRouter>
// )

// export default App;


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from '../../AuthorizedRoute'
import store from '../../store'

// Layouts
import UnauthorizedLayout from '../UnauthorizedLayout/UnauthorizedLayout';
import PrimaryLayout from '../PrimaryLayout/PrimaryLayout';

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        <AuthorizedRoute path="/app" component={PrimaryLayout} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App;