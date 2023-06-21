import React from "react";

import './Css/mobile.css';
import './Css/main.css';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function SimpleButton_Mobile(props){


    return(

        <>

            <Link to={props.pushLink}><Button startIcon={props.icon} style={props.style} size='small'>{props.text}</Button></Link>

        </>

    )

}

export default SimpleButton_Mobile;