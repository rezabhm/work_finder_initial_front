// package
import React, { useState} from "react";

// media
import construction from "./Media/mobile/construction.jpeg";
import mechanic from "./Media/mobile/mechanic.jpeg";

function ImageList_Mobile(props){

    const [image_index, setImageIndex] = useState(0)
    const image_list = props.image_list

    const _ = setInterval(() => {

        setImageIndex(image_index+1)

    }, 10000)

    return(

        <>

            <img src={image_list[(image_index % image_list.length).toFixed()]} alt='image' className='image' />

        </>

    )


}

export default ImageList_Mobile;