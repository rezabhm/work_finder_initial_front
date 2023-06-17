import React from "react";


import './Css/desktop.css';
import './Css/main.css';
import {Link} from "react-router-dom";

function TableCellButtonImage_Desktop(props){

    return(

        <div style={props.style} >

            <Link to={props.pushLink} ><button className='table-cell-button-image' ><img src={props.image} alt={'image'} className='table-cell-button-image-image' /></button></Link>

        </div>

    )

}

export default TableCellButtonImage_Desktop;