import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    currentAnimation: 0,
    wiggle: [0, 0],
    mouse: [0, 0],
    elements: []
  }

  componentDidMount() {
    let N = 300
    let elements = new Array(N)
    elements.fill(0)
    elements = elements.map((e, i) => [Math.random() * 100, Math.random() * 100, (Math.random() * 10 + 1)])
    elements.sort( (e1, e2) => e1[2] < e2[2]) //sort array 
    console.log(elements)
    this.setState({
      elements
    })
    setInterval(this.handleWiggle, 1020);
  }

  handleMouseMove = (event) => {
    // console.log('c',event.clientX, event.clientY)
    // console.log()
    // console.log(window.innerHeight, window.innerWidth)
    let domRect = event.currentTarget.getBoundingClientRect() //bottom , height, left, right, top width,x , y

    let posX = -Math.floor(((event.clientX - window.innerWidth / 2) / window.innerWidth / 0.5) * 100)
    let posY = -Math.floor(((event.clientY - window.innerHeight / 2) / window.innerHeight / 0.5) * 100)

    // console.log(posX, posY)
    this.setState({
      mouse: [posX, posY]
    })



    // document.getElementsByClassName('one').style.transform = "translateX(" + posX/2 + "px)"

  }


  handleWiggle = () => {
    clearInterval(this.state.currentAnimation);
    const wiggle = { ...this.state.wiggle }
    let rand = () => Math.random() - 0.5;
    let dX,
      dY,
      i = 1;
    while (i) {
      dX = rand() * 2;
      dY = rand() * 2;
      if (
        Math.sqrt(Math.pow(wiggle[0] + dX * 50, 2) + Math.pow(wiggle[1] + dY * 50, 2)) < 200 // make shure wiggle stays in radius
      )
        i = 0;
    }
    let wiggleTransition = () => {
      // w[0] = w[0] + dX;
      // w[1] = w[1] + dY;
      // elem.map((e, i) => {
      //   e.style.transform = `translateX(${(m[0] + w[0]) /
      //     (i + 1)}px) translateY(${(m[1] + w[1]) / (i + 1)}px)`;
      // });
      wiggle[0] = wiggle[0] + dX
      wiggle[1] = wiggle[1] + dY
      this.setState({ wiggle })
    }
    let currentAnimation = setInterval(wiggleTransition, 20);
    this.setState({ currentAnimation })
  }

  render() {

    const { mouse, wiggle } = this.state
    const pos = [mouse[0] + wiggle[0], mouse[1] + wiggle[1]]

    return (
      <div className="App" onMouseMove={this.handleMouseMove} >
        <div className="Container" >

          {this.state.elements.map((e, i) => 
            <div
              key={i}
              className="box"
              style={{
                transform: `translateX(${pos[0] / e[2]}px) translateY(${pos[1] / e[2]}px) scale(${2.5 / (e[2])},${2.5 / (e[2])})`,
                backgroundColor: ``,
                left: `${e[0]}vw`,
                top: `${e[1]}vh`,
                color: 'white',
              }}
            >
             .
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
