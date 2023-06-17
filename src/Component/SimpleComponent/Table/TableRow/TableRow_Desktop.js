import React from "react";

import './Css/main.css';

function TableRow_Desktop(props){

    return(

        <div style={props.style} className='table-row' >

            <div>
                {props.content}
            </div>
        </div>

    )

}

export default TableRow_Desktop;