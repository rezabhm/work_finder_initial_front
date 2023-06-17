import React from "react";

import './Css/mobile.css';
import './Css/main.css';
import {Link} from "react-router-dom";

function SimpleButton_Mobile(props){


    return(

        <>

            <Link to={props.pushLink}><button className='simple-button-mobile simple-button' style={props.style} >{props.text}</button></Link>

        </>

    )

}

export default SimpleButton_Mobile;