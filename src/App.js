import React, { Component } from 'react';
import './App.css';
import Header from './navbar/Header';

import Dropdown from './dropdown/Dropdown';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        	<Header/>
        </div>
        <br/>   
        <div>
          <Dropdown />         
        </div>         
      </div>                  
    );
  }
}

export default App;
