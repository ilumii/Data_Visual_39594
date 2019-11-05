import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Manhattan from './pages/manhattan';
import StatenIsland from './pages/statenisland';
import Queens from './pages/queens';
import Bronx from './pages/bronx';
import Brooklyn from './pages/brooklyn';
import './App.css';

class App extends Component { 
  
  render() {  
    const homePageComponent = () => (<Home/>);
    const manhattanPageComponent = () => (<Manhattan/>)
    const statenislandPageComponent = () => (<StatenIsland/>);
    const queensPageComponent = () => (<Queens/>);
    const bronxPageComponent = () => (<Bronx/>);
    const brooklynPageComponent = () => (<Brooklyn/>);
    return (  
      <div className ="App">  
        <Router>
          <Route exact path='/' render={homePageComponent}></Route>
          <Route exact path= '/manhattan' render={manhattanPageComponent}></Route>
          <Route exact path= '/staten_island' render={statenislandPageComponent}></Route>
          <Route exact path='/queens' render={queensPageComponent}></Route>
          <Route exact path='/bronx' render={bronxPageComponent}></Route>
          <Route exact path='/brooklyn' render={brooklynPageComponent}></Route>
        </Router>
      </div>  
    )  
  }  
}  

export default App;
