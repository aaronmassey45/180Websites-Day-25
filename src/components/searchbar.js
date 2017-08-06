import React, { Component } from 'react';
import Magnets from './magnets';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      words: ['butt','some','woman','and','drag','stupid','jokes','on','you','poetry','finger','calendar','elated','grandmother','mine','pray','poised','meek','control','bumpy','fat','furtive','greasy','grass']
    }
  }
  handleChange(term) {
    this.setState({ term });
  }
  handleSubmit(e) {
    let words = this.state.words;
    words.push(this.state.term);
    this.setState({
      term: '',
      words: words
    });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form className='SearchBar' onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            className='form-control'
            value={this.state.term}
            onChange={e => this.handleChange(e.target.value)}
          />
        </form>
        <Magnets words={this.state.words} />
      </div>
    );
  }
}
