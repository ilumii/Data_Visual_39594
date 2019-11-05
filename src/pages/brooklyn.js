import React, { Component } from 'react';
import TableauReport from 'tableau-react';
import {Link} from "react-router-dom";

class Brooklyn extends Component {
    render() {
        const options = {
            hideTabs: true,
            hideToolbar: true
            // All other vizCreate options are supported here, too
            // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
        };
        return (
            <div className='Brooklyn'>
            <Link to='/'><button>Home</button></Link>
            <TableauReport
                url="https://public.tableau.com/views/brooklyn_15729832869820/brooklyn"
                options={options}
            />
            </div>
        );
    }
}

export default Brooklyn;