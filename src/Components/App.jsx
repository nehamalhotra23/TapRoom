import React from 'react';
import Gt from './Gt';
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Error404 from './Error404';

function App() {
 

  return (
    <div >
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Gt" component={Gt} />
        <Route path="/NewKombucha" component={NewKombucha} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
export default App;