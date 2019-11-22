import React from 'react';
import Kombucha from './Kombucha';
import ginger from '../Assets/Img/ginger.png';
import Original from '../Assets/Img/Original.png';
import trilogy from '../Assets/Img/trilogy.png';
import watermelon from '../Assets/Img/watermelon.png';

var MasterGtList = [
  {
    name: 'Kombucha',
    flavour: 'Gingerade',
    brand: 'GT\'s',
    price: '$5',
    photo: ginger
  },
  {
    name: 'Kombucha',
    flavour: 'Original',
    brand: 'GT\'s',
    price: '$5',
    photo: Original
  },
  {
    name: 'Kombucha',
    flavour: 'trilogy',
    brand: 'GT\'s',
    price: '$5',
    photo: trilogy
  },
  {
    name: 'Kombucha',
    flavour: 'Watermelon',
    brand: 'GT\'s',
    price: '$5',
    photo: watermelon
  }
];
function GtList() {
  return (
    <div>
      {MasterGtList.map((kombucha, index) =>
        <Kombucha name={kombucha.name}
          price={kombucha.price}
          flavour={kombucha.flavour}
          brand={kombucha.brand}
          photo={kombucha.photo}
          key={index} />
      )}
    </div>
  );
}
export default GtList;