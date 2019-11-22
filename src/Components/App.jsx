import React from 'react';
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import KombuchaControl from './KombuchaControl';

class App extends React.Component{
  constructor(props){
    super(props);
     
    this.state = {
      MasterList: [],
    };
    this.handleNewKombucha = this.handleNewKombucha.bind(this);
  }
    
  handleNewKombucha(newKombucha){
    let temp = this.state.MasterList.slice();
    temp.push(newKombucha);
    this.setState({MasterList: temp});
  }
  render() {
    return (
      <div className='container'>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route path='/NewKombucha' render={()=><NewKombucha onKombuchaCreation={this.handleNewKombucha} />} ></Route>
          <Route path='/KombuchaControl' render={()=><KombuchaControl kombuchalist={this.state.MasterList}/>}></Route>
        </Switch>
      </div>
   
    );
  }
}
export default App;

