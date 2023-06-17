import React from "react";


import './Css/desktop.css';
import './Css/main.css';

function TableCellText_Desktop(props){

    return(

        <div style={props.style} className='table-cell-text'>

            <p className='table-cell-text-desktop' >{props.text}</p>

        </div>

    )

}

export default TableCellText_Desktop;

