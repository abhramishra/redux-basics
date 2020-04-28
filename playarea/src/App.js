import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/User/List'
import UserShow from './components/User/Show'
import MessageList from './components/message/List'
function App() {
  return (
    <div>
      <h2>Welcome to Redux play-area</h2>
      <BrowserRouter>
        <Link to='/home'>Counter</Link>
        <Link to='/users'>User</Link>
        <Link to='/messages'>Messages</Link>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/users' component={List} exact/>
          <Route path='/user/:id' component={UserShow} exact />
          <Route path='/messages' component={MessageList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
