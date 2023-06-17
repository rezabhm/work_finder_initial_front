import React from "react";

import './Css/main.css';

function TableRow_Mobile(props){

    return(

        <div style={props.style} className='table-row' >

            {props.content}

        </div>


    )

}

export default TableRow_Mobile;