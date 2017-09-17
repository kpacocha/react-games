import React from 'react';
import Header from '../../Components/Header/Header';
import UserSubLayout from '../UserSubLayout/UserSubLayout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <Header title="my title"/>

    <main>
      <Switch>
        <Route path="/" exact component={HomePage} /> />
        <Route path="/users" component={UserSubLayout} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;