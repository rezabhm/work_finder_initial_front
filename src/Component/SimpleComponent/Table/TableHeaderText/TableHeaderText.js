import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";
import TableHeaderText_Mobile from "./TableHeaderText_Mobile";
import TableHeaderText_Desktop from "./TableHeaderText_Desktop";

function TableHeaderText(props){

    if(window.innerWidth <= mobile_size){

        return(

            <TableHeaderText_Mobile style={props.style} text={props.text} />

        )

    }else{

        return(

            <TableHeaderText_Desktop style={props.style} text={props.text} />

        )

    }

}

export default TableHeaderText