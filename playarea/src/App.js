import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/User/List'
import UserShow from './components/User/Show'
function App() {
  return (
    <div>
      <h2>Welcome to Redux play-area</h2>
      <BrowserRouter>
        <Link to='/home'>Home</Link>
        <Link to='/users'>User</Link>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/users' component={List}/>
          <Route path='/user/:id' component={UserShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
