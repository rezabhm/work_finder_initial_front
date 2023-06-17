import React, {useState} from "react";

// media
import './Css/mobile.css';
import './Css/main.css';

function TextBox_Mobile(props){
    const [text, setText] = useState(props.text1)

    const _ = setInterval(()=> text===props.text2 ? setText(props.text1) : setText(props.text2), 10000)


    return(

        <p className='text-box-mobile text-box'>

            {text}

        </p>

    )

}

export default TextBox_Mobile;