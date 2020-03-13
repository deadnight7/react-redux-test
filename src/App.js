import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.ctr}</h1>
          <p>
            <p className="App-link" onClick = {this.props.increment}>Increment</p>
            <p className="App-link" onClick = {this.props.decrement}>Decrement</p>
            <p className="App-link" onClick = {this.props.mux }>Multiply</p>
            <p className="App-link" onClick = {this.props.div }>Divide</p>
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

let mapDispatchToProps = dispatch => {
  return {
    increment : () => dispatch({type: "INCREMENT"}),
    decrement : () => dispatch({type: "DECREMENT"}),
    mux: () => {
      dispatch ({
        type: "MUX"
      });
    },
    div: () => {
      dispatch ({
        type: "DIV"
      });
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps) (App);
