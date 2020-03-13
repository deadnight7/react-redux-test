import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {

  state = {
    counter : 0
  }
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.counter}</h1>
          <p>
            <p className="App-link" onClick = {() => this.increment()}>Increment</p>
            <p className="App-link" onClick = {()=> this.decrement()}>Decrement</p>
            <p className="App-link" onClick = {() => this.mux() }>Multiply</p>
            <p className="App-link" onClick = {() => this.div() }>Divide</p>
          </p>
        </header>
      </div>
    );
  }
  
  increment () {
    this.setState({
      ...this.state ,
      counter: this.state.counter+1
    })
  }

  decrement () {
    this.setState({
      ...this.state ,
      counter: this.state.counter-1
    })
  }

  mux () {
    let newCounterValue = this.state.counter * this.state.counter;

    this.setState({
      ...this.state ,
      counter: newCounterValue
    })
  }

  div () {
    let newCounterValue = this.state.counter / 2;

    this.setState({
      ...this.state ,
      counter: newCounterValue
    })
  }

}

let mapStateToProps = state => {
  return {
    ctr : state.counter
  }
}

export default connect(mapStateToProps) (App);
