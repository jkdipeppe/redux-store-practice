import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.items} is the current count</p>
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);