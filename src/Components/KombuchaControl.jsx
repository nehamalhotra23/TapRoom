import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';

function KombuchaControl(props) {
  return (
    <div>
      {props.kombuchalist.map((kombucha) =>
        <Kombucha name={kombucha.name}
          price={kombucha.price}
          flavour={kombucha.flavour}
          kombucha={kombucha.kombucha}
          photo={kombucha.photo}
          key={kombucha.id} />
      )}
    </div>
  );
}
KombuchaControl.propTypes = {
  kombuchalist: PropTypes.array
};
export default KombuchaControl;