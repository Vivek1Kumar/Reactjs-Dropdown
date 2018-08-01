import React, { Component } from 'react';
import './App.css';
import NavbarFeatures from './Navbar';
import LoginFormsPage from './LoginFormsPage';
import SigninFormsPage from './SigninFormsPage';
import ModalPage from './ModalPage';
import CardUser from './Card';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
           <NavbarFeatures />
        </div>
        <br/>        
        <div>
          <SigninFormsPage />
        </div>
        <br/>
        <div>
           <LoginFormsPage />
        </div>
        <div>
            <ModalPage />
        </div>
        <div>
            <CardUser />
        </div>
      </div>
    );
  }
}

export default App;
