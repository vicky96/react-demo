import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from '../tools/asyncComponent/asyncComponent';

const Home = asyncComponent(() => import('../components/Home/Home'));
const UserList = asyncComponent(() => import('../components/UserList/UserList'));

class RouteComponent extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/userList' component={UserList} />
        </Switch>
      </Router>
    )
  }
}

export default RouteComponent;