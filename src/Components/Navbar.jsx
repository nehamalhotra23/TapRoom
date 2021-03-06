import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  var navigation = {
    paddingTop: '30px',
    paddingBottom: '30px',
    position: 'absolute',
    top: '0',
    width: '88%',
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

  var modelX = {
    textDecoration: 'none',
    padding: '10px',
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: '900',
    marginLeft: '20vmax',
    '&:hover': {
      textDecoration: 'underline'
    }
  };
  var navDiv = {
    marginRight: '5%'
  };
  return (
    <div style={navigation}>
      <div className="header">
        <nav>
          <div style={navDiv}>
            <Link to="/" style={logo}>Kombucha </Link>
            <Link to="/KombuchaControl" style={modelX}>List Of kegs</Link>
            <Link to="/NewKombucha" style={modelX}>Add new Kombucha</Link>
          </div>
        </nav>
      </div>
    </div>

  );
}
export default Navbar;
