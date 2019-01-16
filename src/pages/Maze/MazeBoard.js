import React, { Component } from 'react';
import classNames from 'classnames';
import './MazeBoard.less';

class MazeBoard extends Component {
  constructor(props) {
    super(props);

    this.boardBox = [];

    // this.wallList = [[1, 3], [1, 7], [2, 3], [2, 7], [3, 5], [3, 6], [4, 2], [4, 3], [4, 4], [5, 4], 
    // [6, 2], [6, 6], [7, 2], [7, 3], [7, 4], [7, 6], [7, 7], [8, 1]];

    this.roadList = [];
    this.isWall = false;
    this.pathList = [];
    this.state = {
      nowPosition: [1, 0],
      wallList: [[1, 3], [1, 7], [2, 3], [2, 7], [3, 5], [3, 6], [4, 2], [4, 3], [4, 4], [5, 4], 
      [6, 2], [6, 6], [7, 2], [7, 3], [7, 4], [7, 6], [7, 7], [8, 1]],
      isSuccess:false
    }
  }
  componentDidMount(){
    window.addEventListener('keydown', evt => {
      this.changePosition(evt.keyCode)
    })
  }
  changePosition(keyCode){
    let [a, b] = this.state.nowPosition;
    switch (keyCode) {
      case 37:
        [a, b] = [a, b - 1]
        break;
      case 38:
        [a, b] = [a - 1, b]
        break;
      case 39:
        [a, b] = [a, b + 1]
        break;
      case 40:
        [a, b] = [a + 1, b]
        break;
      default:
        break
    }
    let isWall = false;
    this.boardBox.map((arr,index) => {
      const [i, j] = arr;
      this.state.wallList.map(iWall => {
        const [c, d] = iWall;
        if((a === c && b === d) || (a !== 1 && b === 0 ) || (a !== 8 && b === 9) || a === 0 || a === 9){
          isWall = true;
        }
        return isWall;
      })
    })
    // this.wallList.map(iWall => {
    //   const [c, d] = iWall;
    //   if((a === c && b === d) || (a !== 1 && b === 0) || ()){
    //     isWall = true;
    //   }
    //   return isWall;
    // })
    if(!isWall && b !== 10 && b !== -1){
      this.setState({
        nowPosition: [a, b]
      }, () => {
        this.signPos()
        if(a === 8 && b === 9){
          this.setState({
            isSuccess: true
          })
        }
      })
    }
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
      this.state.wallList.map(iWall => {
        const [a, b] = iWall;
        if(c + 1 !== a){
          this.pathList.push([c,d])
        }
        return this.pathList
      })
    })
  }
  boardList() {
    this.renderBoardBox();
    const board = this.boardBox.map((arr,index) => {
      const [i, j] = arr;
      const style = {
        left: j * 22,
        top: i * 22
      };
      let isWall = false;
      this.state.wallList.map(iWall => {
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
      return <div className={boardClass} style={style} key={index}></div>
    })
    
    return board
  }
  signPos(){
    const [t, l] = this.state.nowPosition;
    const left = (20 - 6) /2 + 20 * l + 2 * l + 1 + 'px';
    const top = (20 - 6)/2 + 20 * t + 2 * t + 1 + 'px';
    return <i className='now' style={{left: left, top: top}}></i>
  }
  changeBoard(){
    let newList = this.state.wallList;
    newList.map((arr, index) => {
      let a = Math.ceil(Math.random() * 8);
      let b = Math.ceil(Math.random() * 8);
      const [c, d] = arr;
      if(a !== c || b !== d){
        newList.splice(index, 1, [a, b])
      }
    })
    this.setState({
      wallList: newList,
      nowPosition: [1, 0],
      isSuccess: false
    })
  }
  render() {
    const successClass = classNames('success', {'success-show': this.state.isSuccess})
    return (
      <div>
        <div className="mazeBoard">
          {this.boardList()}
          {this.signPos()}
        </div>
        <div className={successClass}>Bingo!</div>
        <button className="change-btn" onClick={this.changeBoard.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default MazeBoard;
