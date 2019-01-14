import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from '../tools/asyncComponent/asyncComponent';

const Home = asyncComponent(() => import('../pages/Home/Home'));
const UserList = asyncComponent(() => import('../pages/UserList/UserList'));
const Maze = asyncComponent(() => import('../pages/Maze/Maze'));

class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/userList' component={UserList} />
          <Route path='/Maze' component={Maze} />
        </Switch>
      </Router>
    )
  }
}

export default RouteComponent;