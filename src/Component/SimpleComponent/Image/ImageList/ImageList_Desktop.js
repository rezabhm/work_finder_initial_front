// package
import React, { useState} from "react";

// Media
import mechanic from './Media/Desktop/mechanic1.jpeg';
import construction from './Media/Desktop/construction.jpeg';
import './Css/Desktop.css';


function ImageList_Desktop(props){



    const [image_index, setImageIndex] = useState(1)
    const {image_list} = props;

    const _ = setInterval(() => {

        setImageIndex(image_index+1)

    }, 10000)

    return(

        <>

            <img src={image_list[(image_index % image_list.length).toFixed()]} alt='image' className='image' />

        </>

    )


}

export default ImageList_Desktop;