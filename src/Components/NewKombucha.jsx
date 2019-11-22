import React from 'react';
import newkombucha from '../Assets/Img/newkombucha.jpg';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewKombucha(props) {
  let _name = null;
  let _price = null;
  let _flavour = null;
  let _photo = null;
  let _kombucha = null;
 
  function handleNewKombucha(event) {
    event.preventDefault();
    props.onKombuchaCreation({ name: _name.value, price: _price.value, flavour: _flavour.value, photo: _photo.value,  kombucha: _kombucha.value, id: v4() });
    _name.value = '';
    _price.value = '';
    _flavour.value = '';
    _photo.value = '';
    _kombucha.value = '';
    
  }

  var image = {
    height: '700px',
    width: '600px',
    border: 'solid grey',
    borderRadius: '15px',
  };
  var background = {
    backgroundColor: '#ffae42',
    color: 'brown',
    marginTop: '300px',
  };
  var form = {
    marginTop: '30px',
  };
  return (

    <div style={background} className="row">
      <div className="col-md-6">
        <img style={image} src={newkombucha} />
      </div>
      <div style={form} className="form-group col-md-6">
        <h1>Add a new Kombucha: </h1><br />
        <form onSubmit={handleNewKombucha}>
          <input
            type='text'
            id='name'
            placeholder='name'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='price'
            placeholder='price'
            ref={(input) => { _price = input; }} />
          <input
            type='text'
            id='flavour'
            placeholder='flavour'
            ref={(input) => { _flavour = input; }} />
          <input
            type='text'
            id='photo'
            placeholder='photo'
            ref={(input) => { _photo = input; }} />
          <select className="form-control" ref={(select) => { _kombucha = select; }}>
            <option selected> Select your Brand...</option>
            <option value='Gt'  >Gt's</option>
            <option value='Remedy'>Remedy</option>
          </select><br />
          <button type='submit'>Add</button>
        </form>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <button className="btn btn-secondary">Home</button>
          </a>
        </nav>
      </div>
    </div>
  );
}

NewKombucha.propTypes = {
  onKombuchaCreation: PropTypes.func
};

export default NewKombucha;