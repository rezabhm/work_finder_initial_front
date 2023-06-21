import React from "react";

import './Css/desktop.css';
import './Css/main.css';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function SimpleButton_Desktop(props){


    return(

        <>

            <Link to={props.pushLink}><Button startIcon={props.icon} style={props.style} size='large'>{props.text}</Button></Link>

        </>

    )

}

export default SimpleButton_Desktop;