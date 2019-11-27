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
                <h1>AirBnB Data Visual of Hosts in NYC</h1>
                <button class="button" onClick={this.handleClick}><span>All Data - Questionable, click at own risk. Might blow up computer!</span></button>
                <Link to='/manhattan'><button class="button"><span>Manhattan</span></button></Link>
                <Link to='/brooklyn'><button class="button"><span>Brooklyn</span></button></Link>
                <Link to='/queens'><button class="button"><span>Queens</span></button></Link>
                <Link to='bronx'><button class="button"><span>Bronx</span></button></Link>
                <Link to='/staten_island'><button class="button"><span>Staten Island</span></button></Link>
                <Link to='/forecast'><button class="button"><span>Forecast</span></button></Link>
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