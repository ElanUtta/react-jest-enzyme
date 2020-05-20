import React, { Component } from 'react';
import './App.css';


const h2Style = {
  fontSize: '15px',
  color: 'red'
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      error: null
    }
  }

  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({ error: "Can't decrement than zero" })
    } else {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  increment = () => {
    if (this.state.error !== null) {
      this.setState({ error: null, counter: this.state.counter + 1 })
    } else {
      this.setState({ counter: this.state.counter + 1 })
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test='counter-display'> The counter is currently {this.state.counter}</h1>
        <button
          data-test='increment-button'
          onClick={this.increment}
        > Increment Counter
        </button>
        <button data-test='decrement-counter' onClick={this.decrement}>
          Decrement Counter
        </button>
        <h2 data-test='display-error' style={h2Style}>{
          this.state.error ? this.state.error : this.state.error
        }</h2>
      </div>
    );
  }
}

export default App;
