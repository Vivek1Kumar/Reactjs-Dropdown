import React from 'react';

import CoinTable from '../components/coinTable';
import data from '../jsondata/coinTable.json';
import SuperHero from '../components/superHero';
import superhero from '../jsondata/superHero.json';
import Book from '../components/book';
import books from '../jsondata/book.json';



class FlavorForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    switch(this.state.value){
        case 'firstTable' :
          var coinTable = <CoinTable data={data}/>
          break;
        case 'superHero':
          var secondTable = <SuperHero superhero={superhero}/>
          break;
        case 'book':
          var book = <Book books={books}/>
          break; 
        default: '';    
    }
    return (
      <form>
        <label className="drop">
          <span>Pick your favorite table  </span>
          <select  onChange={this.handleChange}>
            <option value="coconut">Select option</option>
            <option value="firstTable">CoinTable</option>
            <option value="superHero">SuperHero</option>
            <option value="book">Mango</option>
          </select>
        </label>
        <div>{coinTable}</div>
        <div>{secondTable}</div>
        <div>{book}</div>
      </form>
    );
  }
}

export default FlavorForm; 