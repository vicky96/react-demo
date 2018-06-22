import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <span><Link to="/UserList">UserList</Link></span>
      </div>
    )
  }
}

export default Home;
