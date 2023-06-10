// package
import React from "react";
import './Css/background/HomeHeaderBackground.css';


// Media
import backgroundIMG1 from './media/background/background_mobile1.jpeg';
import backgroundIMG2 from './media/background/background_mobile2.jpeg';


function HomeHeaderBackground_Mobile(){

    return(


        <>

            <img src={backgroundIMG1} alt='background image' className='background-image_one'/>
            <img src={backgroundIMG2} alt='background image' className='background-image_two'/>


        </>

    )

}

export default HomeHeaderBackground_Mobile;