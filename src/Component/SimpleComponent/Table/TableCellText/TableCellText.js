import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";
import TableCellText_Mobile from "./TableCellText_Mobile";
import TableCellText_Desktop from "./TableCellText_Desktop";

function TableCellText(props){

    if(window.innerWidth <= mobile_size){

        return(

            <TableCellText_Mobile style={props.style} text={props.text} />

        )

    }else{

        return(

            <TableCellText_Desktop style={props.style} text={props.text} />

        )

    }


}

export default TableCellText