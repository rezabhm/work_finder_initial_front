// package
import React from "react";

// Css
import './Css/title/HomeHeaderTitle.css';

function HomeHeaderTitle_Desktop(props){

    return (

        <div className='title-div'>

            <p className='title' style={{fontSize:'32px'}} >

                {props.title}

            </p>

        </div>


    )

}

export default HomeHeaderTitle_Desktop;