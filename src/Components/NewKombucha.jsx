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
        <input type="text" placeholder="Name" className="form-control" /><br />
        <input type="text" placeholder="Flavour" className="form-control" /><br />
        <input type="text" placeholder="Price" className="form-control" /><br />
        <select className="form-control">
          <option selected>Brand...</option>
          <option>GT's</option>
          <option>Remedy</option>
        </select><br />
        <button type="submit" className="btn btn-secondary">Add</button><hr />
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