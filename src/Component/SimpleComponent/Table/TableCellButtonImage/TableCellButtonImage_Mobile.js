import React from "react";

import './Css/main.css';
import './Css/mobile.css';
import {Link} from "react-router-dom";

function TableCellButtonImage_Mobile(props){

    return(

        <div style={props.style} >

            <Link to={props.pushLink} ><button className='table-cell-button-image' ><img src={props.image} alt={'image'} className='table-cell-button-image-image' /></button></Link>

        </div>

    )
}

export default TableCellButtonImage_Mobile;
