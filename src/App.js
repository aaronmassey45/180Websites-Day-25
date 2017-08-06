import React, { Component } from 'react';
import Navbar from './navbar';
import SearchBar from './components/searchbar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container text-center">
          <h1>Magnet Poetry!</h1>
          <h3>Enter a word if you don't see it then drag it to make poetry</h3>
          <SearchBar />
        </div>

      </div>
    );
  }
}
