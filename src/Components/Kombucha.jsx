import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props) {
  var card = {
    margin: '20px',
    width: '300px',
    borderRadius: '12px',
    border: 'solid 1px rgba(255, 255, 255, 0.2)',
    webkitBoxShadow:' 4px 5px 5px - 3px #000000',
    boxShadow: '4px 5px 5px - 3px #000000',
    overflow: 'hidden',
    padding: '10px',
  };
  var image = {
    margin: '5 %',
    height: '200px',
    minHeight: '200px',
    overflow: 'hidden',
    border: 'solid 1px rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    webkitBoxShadow: '0px 0px 6px - 2px #000000',
    boxShadow: '0px 0px 6px - 2px #000000',
  };
  return (
        
    <div className="row" style={card}>
      <div className="col-md-12">  
        <img style={image} src={props.photo} />
        <div>
          <p>Name: {props.name}</p>
          <p>Price: {props.price}</p>
          <p>Brand: {props.brand}</p>
          <p>description: {props.flavour}</p>
        </div> 
      </div>
    </div>


  );
}
Kombucha.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  brand: PropTypes.string,
  flavour: PropTypes.string,
  photo: PropTypes.string,
};

export default Kombucha;
