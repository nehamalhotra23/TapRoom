import React from 'react';
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
// import Error404 from './Error404';
import KombuchaControl from './KombuchaControl';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      MasterList: []
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
      <div >
        <div className='container'>
          <Switch>
            <Route exact path='/' component={MainPage} ></Route>
            <Route path='/NewKombucha' render={()=><NewKombucha onKombuchaCreation={this.handleNewKombucha} />} ></Route>
            <Route path='/KombuchaControl' render={()=><KombuchaControl kombuchalist={this.state.MasterList}/>}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

