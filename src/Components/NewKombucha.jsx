import React from 'react';
import newkombucha from '../Assets/Img/newkombucha.jpg';

function NewKombucha() {
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
        <form onSubmit={handleSubmission}>
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
          {/* <select className="form-control" ref={(select) => { _tamo = select; }}>
            <option selected> Select your Brand...</option>
            <option value='monster'  >Gt's</option>
            <option value='alien'>Remedy</option>
          </select><br /> */}
          <button type='submit'>create player</button>
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

export default NewKombucha;