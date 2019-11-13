import React, { Component } from 'react';
import TableauReport from 'tableau-react';
import { Link } from "react-router-dom";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
    };

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    render() {
        const options = {
            hideTabs: true,
            hideToolbar: true
            // All other vizCreate options are supported here, too
            // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
        };
        return (
            <div className="Home">
                <h1>AirBnB Data Visual</h1>
                <button style={{ margin: 5 }} onClick={this.handleClick}>All Data - Questionable, click at own risk. Might blow up computer!</button>
                <Link to='/manhattan'><button style={{ margin: 5 }}>Manhattan</button></Link>
                <Link to='/brooklyn'><button style={{ margin: 5 }}>Brooklyn</button></Link>
                <Link to='/queens'><button style={{ margin: 5 }}>Queens</button></Link>
                <Link to='bronx'><button style={{ margin: 5 }}>Bronx</button></Link>
                <Link to='/staten_island'><button style={{ margin: 5 }}>Staten Island</button></Link>
                <Link to='/forecast'><button style={{ margin: 5 }}>Forecast</button></Link>
                <div>
                    {this.state.clicked ? (<div><TableauReport
                        url="http://public.tableau.com/views/AB_Data/newyorkcity"
                        options={options}
                    /></div>) : (<div></div>)}
                </div>
            </div>
                );
            }
        }
        
export default Home;