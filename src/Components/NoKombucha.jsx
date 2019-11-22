import React from 'react';
import UpArrow from '../assets/img/arrow.gif';

function NoKombucha() {
    var align = {
        marginTop: "200px",
        marginLeft: "300px"
    }
    var h1 = {
        marginLeft: "300px" 
    }
    return (
        <div className="center">
            <img style={align} src={UpArrow} alt="up arrow"></img>
            <h1 style={h1}>Add a new Kombucha!!</h1>
        </div>

    );
}

export default NoKombucha;