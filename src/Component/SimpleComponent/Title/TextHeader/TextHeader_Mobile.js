import React, {useState} from "react";

import './Css/Mobile.css';

function TextHeader_Mobile(props){

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
            <h4 className='text-header-title-mobile'>

                {text}

            </h4>

            <div className='header-bottom-line-mobile'><></></div>
        </>
    )


}

export default TextHeader_Mobile;