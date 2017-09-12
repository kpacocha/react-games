import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../../Components/Header/Header';
// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Header title="my title"/>
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;




import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <Header title="my title"/>
    <header>
      Our React Router 4 App
      <Route path="/users" component={UsersMenu} />
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/add" component={UserAddPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

const UserAddPage=() => <div>User Add Page</div>
const UsersMenu=() => <div>Users Menu
<ul>
        <li><Link to="/users/add">Add user</Link></li>
            </ul>
            </div>
const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;