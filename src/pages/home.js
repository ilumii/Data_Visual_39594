import React, { Component } from 'react';
import {Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>AirBnB Data Visual</h1>
                <Link to='/manhattan'><button>Manhattan</button></Link>
                <Link to='/brooklyn'><button>Brooklyn</button></Link>
                <Link to='/queens'><button>Queens</button></Link>
                <Link to='bronx'><button>Bronx</button></Link>
                <Link to='/staten_island'><button>Staten Island</button></Link>
            </div>
        );
    }
}

export default Home;