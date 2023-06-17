import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD Component
import TableRow_Mobile from "./TableRow_Mobile";
import TableRow_Desktop from "./TableRow_Desktop";


function TableRow(props){

    if( window.innerWidth <= mobile_size){

        return(

            <TableRow_Mobile style={props.styleMobile} content={props.content}/>

        )

    }else{

        return(

            <TableRow_Desktop style={props.styleDesktop} content={props.content} />

        )

    }

}

export default TableRow;