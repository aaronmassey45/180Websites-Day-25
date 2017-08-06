import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Magnet extends Component {

  render() {
    let style = {
      top: `60%`,
      float: 'left'
    }
    return (
      <Draggable>
        <div className='Magnet' style={style}>
          {this.props.term}
        </div>
      </Draggable>
    );
  }
}
