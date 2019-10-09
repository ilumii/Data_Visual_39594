import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <h1>NYC Airbnb Data</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
<nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/graph1'>graph1</NavLink></li>
    <li><NavLink to='/graph2'>graph2</NavLink></li>
  </ul>
</nav>
);

const Home = () => (
  <div className='home'>
    <h1>Introduction</h1>
    <p> As a team, we have decided to analyze NYC Airbnb Open Data from kaggle.com that contains listings, and metrics for 2019. The data given allows us to find out more information about hosts, geographical availability, and other information which allows us to make predictions and conclusions with the information provided. Some information that we can learn from these predictions include but are not limited to pricing, types of hosts, how busy a specific location is, and influences for how busy a location is. We will visualize these metrics and listing by implementing them in a heatmap that shows the pricing, types of hosts, and more data, depending on different factors, such as how populated an area is.
</p>
<p>Team 7: Jiale Qiu, Vincent Zheng, Wei Lin, Steven Li, Tommy Chen</p>
  </div>
);

const graph1 = () => (
  <div className='graph1'>
    <h1>Graph 1</h1>
    <p><strong>work in progress</strong></p>
  </div>
);

const graph2 = () => (
  <div className='graph2'>
    <h1>Graph 2</h1>
    <p><strong>work in progress</strong></p>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/graph1' component={graph1}></Route>
    <Route exact path='/graph2' component={graph2}></Route>
  </Switch>
);

export default App;
