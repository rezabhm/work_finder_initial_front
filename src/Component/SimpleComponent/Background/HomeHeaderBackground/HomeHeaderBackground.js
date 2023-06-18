// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD component
import HomeHeaderBackground_Desktop from "./HomeHeaderBackground_Desktop";
import HomeHeaderBackground_Mobile from "./HomeHeaderBackground_Mobile";

function HomeHeaderBackground(){



    if(window.innerWidth <= mobile_size){


        return(


            < >

                <HomeHeaderBackground_Mobile />

            </>


        )


    }else{

        return(


            <>

                <HomeHeaderBackground_Desktop />

            </>


        )



    }

}

export default HomeHeaderBackground;