import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Present from './present.jsx';
import { setDate } from './actions/appActions';

class App extends Component {
  componentDidMount(){
    this.props.setDate(new Date());

    setInterval(() => this.props.setDate(new Date()), 333);
  }

  // @boundHandler
  onInputChange = (e) => {
    this.setState({ str: e.target.value });
  }

  render() {
    return (
      <div className="App" onClick={e => console.log(e.target)}>
        <Present str={ '' }
                 onInputChange={ this.onInputChange } />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { date: state.app.date };
}

function mapActionsToProps(dispatch){
  return {
    setDate: (date) => dispatch(setDate(date))
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);
