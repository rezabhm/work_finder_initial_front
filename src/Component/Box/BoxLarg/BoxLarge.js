// package
import React from "react";
import {mobile_size} from "../../../config/Responsive/RWD";

// RWD component
import BoxLarge_Mobile from "./BoxLarge_Mobile";
import BoxLarge_Desktop from "./BoxLarge_Desktop";


function BoxLarge(props) {

    if(window.innerWidth <= mobile_size){

        return(

            <BoxLarge_Mobile scrollHeight={props.mobile_scroll_height}  />

            )

    }else{

        return(

            <BoxLarge_Desktop scrollHeight={props.desktop_scroll_height} />

            )

    }


}

export default BoxLarge;