// package
import React, { useState} from "react";

// Media
import mechanic from './Media/Desktop/mechanic1.jpeg';
import construction from './Media/Desktop/construction.jpeg';
import './Css/Desktop.css';


function ImageList_Desktop(props){



    const [image_index, setImageIndex] = useState(1)
    const {imageList} = props;

    const _ = setInterval(() => {

        if(image_index === 0){

            setImageIndex(1)

        }else{

            setImageIndex(0)

        }

    }, 10000)

    return(

        <>

            <img src={imageList[image_index]} alt='image' className='image' />

        </>

    )


}

export default ImageList_Desktop;