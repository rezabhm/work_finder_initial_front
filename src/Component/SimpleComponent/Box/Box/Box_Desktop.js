// package
import React, {useEffect, useState} from "react";

// Css
import './Css/main.css';
import {Box} from "@mui/material";
import {main_div, main_div_appear} from "./Css/main";

function Box_Desktop(props){

    /////////////////////////////////////////////////
    // attribute
    /////////////////////////////////////////////////

    const [mainDiv, setMainDiv ] = useState(main_div);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    /////////////////////////////////////////////////
    // function
    /////////////////////////////////////////////////

    const listenToScroll =()=>{

        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if(winScroll >= props.scrollHeight){

            setMainDiv(main_div_appear)

        }

    }

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////


    return(
        //
        // <div className={mainDiv} style={props.style}
        //
        // >
        //
        //     {props.content}
        //
        // </div>

        <Box style={mainDiv} >

            {props.content}

        </Box>


    )

}

export default Box_Desktop;