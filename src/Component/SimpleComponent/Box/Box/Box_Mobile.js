// package
import React, {useEffect, useState}  from "react";


function Box_Mobile(props){

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

        <div className={mainDiv} style={props.style}

        >

            {props.content}

        </div>

    )


}

export default Box_Mobile;