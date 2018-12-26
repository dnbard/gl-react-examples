import React, { Component } from 'react';
import DateView from './date.jsx';

export default class Present extends Component{
    render(){
        return <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DateView />
        <input value={ this.props.str } onChange={ this.props.onInputChange } />
      </header>;
    }
}
