// package
import React, { useState} from "react";

// media
import construction from "./Media/mobile/construction.jpeg";
import mechanic from "./Media/mobile/mechanic.jpeg";

function ImageList_Mobile(){

    const [image_index, setImageIndex] = useState(1)
    const image_list = [construction, mechanic]

    const _ = setInterval(() => {

        if(image_index === 0){

            setImageIndex(1)

        }else{

            setImageIndex(0)

        }

    }, 10000)

    return(

        <>

            <img src={image_list[image_index]} alt='image' className='image' />

        </>

    )


}

export default ImageList_Mobile;