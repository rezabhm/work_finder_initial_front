// package
import React from "react";

// Css
import './Css/title/HomeHeaderTitle.css';

function HomeHeaderTitle_Mobile(props){

    return (

        <>

            <h5 className='title'  >

                {props.title}

            </h5>

        </>


    )

}

export default HomeHeaderTitle_Mobile;