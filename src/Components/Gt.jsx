import React from 'react';
import Navbar from './Navbar';
import GtList from './GtList';

function Gt() {
  var space = {
    margin: '140px',
  };
  var cover = {
    backgroundColor: '#ffae42',
    color: 'brown',
  };
  return (
    <div style={cover}>
      <Navbar/>
      <div style={space}><GtList /></div>
    </div>
  );
}

export default Gt;