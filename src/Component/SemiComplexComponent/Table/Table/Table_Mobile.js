import React from "react";

import {generateHeader} from "./utils/header";
import {generateRow} from "./utils/body";

function Table_Mobile(props){



    return(


        <div style={props.tableStyle} >

            {generateHeader(props.header, props.headerRowStyle)}
            {props.rowsData.map(data=>{

                return generateRow(data.body, data.style)


            })}


        </div>


    )

}

export default Table_Mobile;