import React from "react";

import './Css/main.css';
import './Css/mobile.css';

function TableCellText_Mobile(props){

    return(

        <div style={props.style} className='table-cell-text'>

            <p className='table-cell-text-mobile'>{props.text}</p>

        </div>

    )
}

export default TableCellText_Mobile;
