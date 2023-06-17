import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD Component
import TableCellButtonImage_Mobile from "./TableCellButtonImage_Mobile";
import TableCellButtonImage_Desktop from "./TableCellButtonImage_Desktop";

function TableCellButtonImage(props){

    if(window.innerWidth <= mobile_size){

        return(

            <TableCellButtonImage_Mobile style={props.styleMobile} image={props.image} pushLink={props.pushLink} />

        )

    }else{

        return(

            <TableCellButtonImage_Desktop style={props.styleDesktop} image={props.image} pushLink={props.pushLink} />

        )

    }

}

export default TableCellButtonImage