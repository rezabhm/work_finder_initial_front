// package
import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD component
import ImageList_Desktop from "./ImageList_Desktop";
import ImageList_Mobile from "./ImageList_Mobile";


function ImageList(){

    if(window.innerWidth <= mobile_size){

        return(

            <ImageList_Mobile />

        )


    }else{


        return(

            <ImageList_Desktop />

        )

    }


}

export default ImageList;