// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD component
import Box_Mobile from "./Box_Mobile";
import Box_Desktop from "./Box_Desktop";


function Box(props) {

    if(window.innerWidth <= mobile_size){

        return(

            <Box_Mobile scrollHeight={props.mobile_scroll_height} content={props.content} style={props.style} />

            )

    }else{

        return(

            <Box_Desktop scrollHeight={props.desktop_scroll_height} content={props.content} style={props.style} />

            )

    }


}

export default Box;