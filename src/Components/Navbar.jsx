import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  var navigation = {
    paddingTop: '30px',
    paddingBottom: '30px',
    position: 'absolute',
    top: '0',
    width: '200%',
    zIndex: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };
  var logo = {
    paddingLeft: '2%',
    fontFamily: 'Arial',
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff'
  };

  var center = {
    textDecoration: 'none',
    padding: '10px',
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: '900',
    '&:hover': {
      textDecoration: 'underline'
    }
  };
  var modelX = {
    textDecoration: 'none',
    padding: '10px',
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: '900',
    marginLeft: '30vmax',
    marginRight: 'auto',
    '&:hover': {
      textDecoration: 'underline'
    }
  };
  
  return (
    <div style={navigation}>
      <div className="header">
        <nav>
          <div >
            <Link to="/" style={logo}>Kombucha </Link>
            <Link to="/KombuchaControl" style={modelX}>GT's</Link>
            <Link to="/NewKombucha" style={center}>Add new Kombucha</Link>
          </div>
        </nav>
      </div>
    </div>

  );
}
export default Navbar;
