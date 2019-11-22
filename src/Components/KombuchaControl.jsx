import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';
import NoKombucha from './NoKombucha';

function KombuchaControl(props) {
  var flex = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '100px',
    padding: '20px'
  };
  var margin = {
    color: 'red'
  };
  var back = {
    backgroundColor: '#ffae42',
    color: 'brown'
  };

  function KombuchaListEmpty() {
    console.log(props.kombuchalist);
    if (props.kombuchalist.length == 0) {
      return (
        <div style={margin}>
          <NoKombucha/>
        </div>
      );
    } else {
      return <div style={flex}>
        {props.kombuchalist.map((kombucha) =>
          <Kombucha
            name={kombucha.name}
            price={kombucha.price}
            photo={kombucha.photo}
            flavour={kombucha.flavour}
            kombucha={kombucha.kombucha}
            key={kombucha.id} />
        )}
      </div>;
    }
  }
  return (
    <div style={back}>
      {KombuchaListEmpty()}
    </div>
  );
}

KombuchaControl.propTypes = {
  kombuchalist: PropTypes.array
};


export default KombuchaControl;