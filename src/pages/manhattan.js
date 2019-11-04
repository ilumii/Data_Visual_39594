import React,{Component} from 'react';
import TableauReport from 'tableau-react';


class Manhattan extends Component { 
  render() {  
    const options = {
      hideTabs: true, 
      hideToolbar: true
      // All other vizCreate options are supported here, too
      // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
    };
        
    return (  
      <div>  
          <h1>B</h1>
        <TableauReport 
          url="http://public.tableau.com/views/AB_Data/newyorkcity"
          options={options}
        />
      </div>  
    )  
  }  
}  

export default Manhattan;
