// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// Css
import './Css/background/HomeHeaderBackground.css';
import './Css/main/main.css'

// RWD component
import HomeHeaderBackground_Desktop from "./HomeHeaderBackground_Desktop";
import HomeHeaderBackground_Mobile from "./HomeHeaderBackground_Mobile";


function HomeHeaderBackground(){


    if(window.innerWidth <= mobile_size){


        return(


            <div className='background-div'>

                <HomeHeaderBackground_Mobile />

            </div>


        )


    }else{

        return(


            <div className='background-div'>

                <HomeHeaderBackground_Desktop />

            </div>


        )



    }

}

export default HomeHeaderBackground;