import React  from 'react'

import {Carousel} from '3d-react-carousel'
import '3d-react-carousel/dist/index.css'
import {mobile_size} from "../../../../config/Responsive/RWD";
import ImageList_Mobile from "./ImageList_Mobile";
import ImageList_Desktop from "./ImageList_Desktop";

function ImageList(props){

    if (window.innerWidth <= mobile_size){

        return(

            <ImageList_Mobile image_list={props.image_list}/>

        )


    }else{

        return(

            <ImageList_Desktop image_list={props.image_list}/>

        )


    }
}

export default ImageList;