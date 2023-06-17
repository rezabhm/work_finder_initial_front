import React from "react";

import './Css/desktop.css';
import './Css/main.css';
import {Link} from "react-router-dom";

function SimpleButton_Desktop(props){


    return(

        <>

            <Link to={props.pushLink}><button className='simple-button-desktop simple-button' style={props.style} ><span style={{color:'white'}} >{props.text}</span></button></Link>

        </>

    )

}

export default SimpleButton_Desktop;