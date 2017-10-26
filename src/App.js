import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    posX: 0,
    posY: 0
  }

  handleMouseMove = (event) => {
    // console.log('c',event.clientX, event.clientY)
    // console.log()
    // console.log(window.innerHeight, window.innerWidth)
    let domRect = event.currentTarget.getBoundingClientRect() //bottom , height, left, right, top width,x , y

    let posX = -Math.floor(((event.clientX - window.innerWidth / 2) / window.innerWidth / 0.5) * 100 )
    let posY = -Math.floor(((event.clientY - window.innerHeight / 2) / window.innerHeight / 0.5) * 100 )

    // console.log(posX, posY)
    this.setState({
      posX,
      posY
    })

    // document.getElementsByClassName('one').style.transform = "translateX(" + posX/2 + "px)"

  }
  render() {
    let {posX, posY} = this.state
    return (
      <div className="App" onMouseMove={this.handleMouseMove} >
        <div className="Container" >
          <div 
            className="one" 
            style={{ 
            transform: `translateX(${posX / 3}px) translateY(${posY/3}px)`
            }}
            >
            one
          </div>
          <div 
            className="two" 
            style={{ 
            transform: `translateX(${posX / 2}px) translateY(${posY/2}px)`
            }}
            >
            two
          </div>
          <div 
            className="three" 
            style={{ 
            transform: `translateX(${posX / 1}px) translateY(${posY/1}px)`
            }}
            >
            three
          </div>
        </div>
      </div>
    );
  }
}

export default App;
