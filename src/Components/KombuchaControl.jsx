import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';

function KombuchaControl(props) {
  var flex = {
    display: 'flex',
    justifyContent: 'space-between'
  };
  var margin = {
    marginTop: '50px',
    color: 'red'
  };

  function KombuchaListEmpty() {
    console.log(props.kombuchalist);
    if (props.kombuchalist.length == 0) {
      return (
        <div style={margin}>
          <p>NO Kombucha</p>
        </div>
      );
    } else {
      return <div style={flex}>
        {props.kombuchalist.map((kombucha) =>
          <Kombucha
            name={kombucha.name}
            kombucha={kombucha.kombucha}
            price={kombucha.price}
            flavour={kombucha.flavour}
            kombucha={kombucha.kombucha}
            key={kombucha.id} />
        )}
      </div>;
    }
  }
  return (
    <div>
      {KombuchaListEmpty()}
    </div>
  );
}

KombuchaControl.propTypes = {
  kombuchalist: PropTypes.array
};


export default KombuchaControl;