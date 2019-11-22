import React from 'react';
import cover from '../Assets/Img/cover.png';

function Home() {
  var back = {
    backgroundImage: `url(${cover})`,
    height: '1000px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <div style={back}></div>   
  );
}
export default Home;

