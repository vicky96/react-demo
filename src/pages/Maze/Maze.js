import React, { Component } from 'react';
import './Maze.less';
import MazeBoard from './MazeBoard';

class Maze extends Component {
  render() {
    return (
      <div className="maze">
        <MazeBoard />
      </div>
    )
  }
}

export default Maze;
