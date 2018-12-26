import React from 'react';
import { connect } from 'react-redux';

export function DateView({ date }){
    return <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React at { date ? date.toString() : '' }
  </a>;
}

export default connect(state => ({ date: state.app.date }))(DateView);
