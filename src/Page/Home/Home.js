import React from "react";

import '../../Assets/Css/Pages/Home/main.css';
import HomeHeaderBackground from "../../Component/SimpleComponent/Background/HomeHeaderBackground/HomeHeaderBackground";
import HomeHeaderTitle from "../../Component/SimpleComponent/Title/HomeheaderTitle/HomeheaderTitle";
import BoxLarge from "../../Component/SimpleComponent/Box/BoxLarg/BoxLarge";
import {BoxLargeElement, SignupLoginButton, TableGenerator} from "./body";
import Box from "../../Component/SimpleComponent/Box/Box/Box";

function Home(){


    return(

        <div className='home-page'>

             {/* Header */}

            <div style={{width:'100%', height:window.innerHeight.toString() + 'px'}} >

                <HomeHeaderBackground />

            </div>


            <div style={{width:'100%', height:window.innerHeight.toString() + 'px', position:'absolute', left:'0px', top:window.innerHeight.toString() + 'px'}} >

                <BoxLarge desktop_scroll_height={window.innerHeight * 0.25} mobile_scroll_height={window.innerHeight * 0.25} content={BoxLargeElement()} />

            </div>

            <div style={{width:'100%', height:'50%', position:'relative', left:'0px', top:window.innerHeight.toString() + 'px'}} >

                <Box desktop_scroll_height={window.innerHeight * 1.5} mobile_scroll_height={window.innerHeight * 1.5} content={SignupLoginButton()} style={{width:'95%', height:'30%', position:'relative', top:'0px', right:'0px'}} />

            </div>


            <div style={{width:'100%', height:'400%', position:'relative', left:'0px', top:(window.innerHeight * 0.68).toString() + 'px'}} >

                <Box desktop_scroll_height={window.innerHeight * 1.5} mobile_scroll_height={window.innerHeight * 1.5} content={TableGenerator()} style={{width:'95%', height:'30%', position:'relative', top:'0px', right:'0px'}} />

            </div>

        </div>

    )

}

export default Home;