// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD component
import TextHeader_Mobile from "./TextHeader_Mobile";
import TextHeader_Desktop from "./TextHeader_Desktop";

function TextHeader(props){

    if(window.innerWidth <= mobile_size){


        return(

            <TextHeader_Mobile title1={props.title1} title2={props.title2} />

        )

    }else {

        return(

            <TextHeader_Desktop  title1={props.title1} title2={props.title2} />

        )

    }


}

export default TextHeader;