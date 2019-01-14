import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.less';

class Home extends Component {
  render () {
    return (
      <div className="home">
        <span><Link to="/UserList">UserList</Link></span>
        <span><Link to="/Maze">Maze</Link></span>
      </div>
    )
  }
}

export default Home;
