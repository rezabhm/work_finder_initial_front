import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";
import SimpleButton_Desktop from "./SimpleButton_Desktop";
import SimpleButton_Mobile from "./SimpleButton_Mobile";

function SimpleButton(props){

    if(window.innerWidth <= mobile_size){

        return(

            <SimpleButton_Mobile text={props.text} style={props.style} pushLink={props.pushLink} icon={props.icon} />

        )

    }else{

        return(

            <SimpleButton_Desktop  text={props.text} style={props.style} pushLink={props.pushLink} icon={props.icon} />

        )

    }

}

export default SimpleButton;