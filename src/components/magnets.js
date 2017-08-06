import React, { Component } from 'react';
import Magnet from './magnet';

export default class Magnets extends Component {
  render() {
    let magnetWords;
    if (this.props.words) {
      magnetWords=this.props.words.map(magnet => {
        return (
          <Magnet key={magnet} term={magnet}/>
        )
      });
    }
    return (
      <div className='Magnets'>
        {magnetWords}
      </div>
    );
  }
}
