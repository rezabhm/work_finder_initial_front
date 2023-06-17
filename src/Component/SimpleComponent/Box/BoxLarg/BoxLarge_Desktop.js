// package
import React, {useEffect, useState} from "react";

// Css
import './Css/main/desktop.css';

function BoxLarge_Desktop(props){

    /////////////////////////////////////////////////
    // attribute
    /////////////////////////////////////////////////

    const [mainDiv, setMainDiv ] = useState('main-div');

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

            setMainDiv('main-div-appear')

        }

    }

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////


    return(

        <div className={mainDiv}

        >

            {props.content}

        </div>

    )

}

export default BoxLarge_Desktop;