// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";
import HomeHeaderTitle_Desktop from "./HomeheaderTitle_Desktop";
import HomeHeaderTitle_Mobile from "./HomeheaderTitle_Mobile";


// Css
import './Css/title/HomeHeaderTitle.css';


function HomeHeaderTitle(props){

        if(window.innerWidth <= mobile_size){

            return (

                <>

                    < HomeHeaderTitle_Mobile  title={props.title} />

                </>


            )


        }else{

            return (

                <>

                    < HomeHeaderTitle_Desktop title={props.title} />

                </>


            )



        }


}

export default HomeHeaderTitle;