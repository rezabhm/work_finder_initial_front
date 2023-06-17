import React from "react";
import {mobile_size} from "../../../../config/Responsive/RWD";

// RWD Component
import ProfileImage_Mobile from "./ProfileImage_Mobile";
import ProfileImage_Desktop from "./ProfileImage_Desktop";

function ProfileImage(props){

    if(window.innerWidth <= mobile_size){

        return(

            <ProfileImage_Mobile style={props.styleMobile} image={props.image} />

        )

    }else{

        return(

            <ProfileImage_Desktop style={props.styleDesktop} image={props.image} />

        )

    }


}

export default ProfileImage