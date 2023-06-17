import React from "react";


import './Css/desktop.css';
import './Css/main.css';

function TableHeaderText_Desktop(props){

    return(

        <div style={props.style} className='table-header-text'>

            <p className='table-header-text-desktop' >{props.text}</p>

        </div>

    )

}

export default TableHeaderText_Desktop;

