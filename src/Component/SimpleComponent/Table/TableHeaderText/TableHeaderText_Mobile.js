import React from "react";

import './Css/main.css';
import './Css/mobile.css';

function TableHeaderText_Mobile(props){

    return(

        <div style={props.style} className='table-header-text'>

            <p className='table-header-text-mobile'>{props.text}</p>

        </div>

    )
}

export default TableHeaderText_Mobile;
