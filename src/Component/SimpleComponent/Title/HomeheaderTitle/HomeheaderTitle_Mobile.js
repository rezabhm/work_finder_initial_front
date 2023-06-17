// package
import React from "react";

// Css
import './Css/title/HomeHeaderTitle.css';

function HomeHeaderTitle_Mobile(props){

    return (

        <div className='title-div'>

            <p className='title' style={{fontSize:'12px'}} >

                {props.title}

            </p>

        </div>


    )

}

export default HomeHeaderTitle_Mobile;