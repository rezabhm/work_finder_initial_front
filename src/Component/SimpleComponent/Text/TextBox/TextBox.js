import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD component
import TextBox_Mobile from "./TextBox_Mobile";
import TextBox_Desktop from "./TextBox_Desktop";


function TextBox(props){

    if(window.innerWidth <= mobile_size){

        return(

            <TextBox_Mobile  text1={props.text1} text2={props.text2} />

        )

    }else{

        return(

            <TextBox_Desktop text1={props.text1} text2={props.text2} />

        )

    }

}

export default TextBox;