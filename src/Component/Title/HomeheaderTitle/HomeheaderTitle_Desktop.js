// package
import React from "react";

// Css
import './Css/title/HomeHeaderTitle.css';

function HomeHeaderTitle_Desktop(props){

    return (

        <>

            <h1 className='title' >

                {props.title}

            </h1>

        </>


    )

}

export default HomeHeaderTitle_Desktop;