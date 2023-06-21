// package
import React, {useEffect, useState}  from "react";
import {main_div, main_div_appear} from "./Css/main";
import {Box} from "@mui/material";


function Box_Mobile(props){

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

        <Box style={mainDiv} >

            {props.content}

        </Box>

    )


}

export default Box_Mobile;