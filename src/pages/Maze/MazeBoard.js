import React, { Component } from 'react';
import classNames from 'classnames';
import './MazeBoard.less';

class MazeBoard extends Component {
  constructor(props) {
    super(props);

    this.boardBox = [];

    this.wallList = [[1, 3], [1, 7], [2, 3], [2, 7], [3, 5], [3, 6], [4, 2], [4, 3], [4, 4], [5, 4], 
    [6, 2], [6, 6], [7, 2], [7, 3], [7, 4], [7, 6], [7, 7], [8, 1]];

    this.roadList = [];
    this.isWall = false;
    this.pathList = [];
  }
  renderBoardBox() {
    for(let i = 0; i <= 9; i++){
      for(let j = 0; j <= 9; j++){
        this.boardBox.push([i,j])
      }
    }
  }
  renderPath(i, j) {
    this.roadList.map(iRoad => {
      const [c, d] = this.roadList;
      this.wallList.map(iWall => {
        const [a, b] = iWall;
        if(c + 1 !== a){
          this.pathList.push([c,d])
        }
        return this.pathList
      })
    })
    console.log(this.pathList)
  }
  boardList() {
    this.renderBoardBox();
    
    const board = this.boardBox.map(arr => {
      const [i, j] = arr;
      const style = {
        left: j * 22,
        top: i * 22
      };
      let isWall = false;
      this.wallList.map(iWall => {
        const [a, b] = iWall;
        if((a === i && b === j) || i === 0 || (j === 0 && i !== 1) || (j === 9 && i !== 8) || i === 9){
          isWall = true;
        }
        return isWall;
      })
      let isRoad = false;
      
      if(isWall === false){
        this.roadList.push(arr)
      }
      // this.renderPath(i, j);
      const boardClass = classNames('board-list', {'wall': isWall}, {'road': isRoad})
      return (<div className={boardClass} style={style} key={'' + i + j}></div>)
    })
    
    return board
  }
  render() {
    
    return (
      <div className="mazeBoard">
        {this.boardList()}
      </div>
    )
  }
}

export default MazeBoard;
