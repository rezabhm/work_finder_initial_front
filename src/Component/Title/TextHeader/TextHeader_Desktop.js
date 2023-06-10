import React, {useState} from "react";

// media
import './Css/main.css';
import './Css/Desktop.css';

function TextHeader_Desktop(props){

    const [text, setText] = useState(props.title1)

    const _ = setInterval(()=>{

        if(text === props.title1){

            setText(props.title2)

        }else{

            setText(props.title1)


        }


    }, 10000)

    return(

        <>
            <h1 className='text-header-title-desktop  '>

                {text}

            </h1>

            <div className='header-bottom-line-desktop'><></></div>

        </>
    )

}

export default TextHeader_Desktop;