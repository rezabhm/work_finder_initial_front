import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

import Table_Desktop from "./Table_Desktop";
import Table_Mobile from "./Table_Mobile";


function Table(props){


    if(window.innerWidth <= mobile_size){

        return(

            <Table_Mobile tableStyle={props.tableStyle} header={props.header} headerRowStyle={props.headerRowStyle} rowsData={props.rowsData}/>

        )


    }else{

        return(

            <Table_Desktop tableStyle={props.tableStyle} header={props.header} headerRowStyle={props.headerRowStyle} rowsData={props.rowsData}/>

        )

    }

}

export default Table;