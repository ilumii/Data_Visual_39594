import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Map from './pages/map';
import Manhattan from './pages/manhattan';

class App extends Component {
  render() {
    const MapComponent = () => (<Map/>);
    const ManhattanComponent = () => (<Manhattan/>);

    return (
      <Router>
        <div>
          <Route exact path="/" render={MapComponent} />
          <Route exact path="/manhattan" render={ManhattanComponent} />
        </div>
      </Router>
    )
  }
}

export default App;
