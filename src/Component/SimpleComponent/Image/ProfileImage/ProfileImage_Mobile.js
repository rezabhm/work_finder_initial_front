import React from "react";

import './Css/main.css';
import './Css/mobile.css';

function ProfileImage_Mobile(props){

    return(

        <div style={props.style} className='profile-image profile-image-div'>

            <img src={props.image} alt={'profile-image'} className='profile-image-mobile profile-image-img ' />

        </div>

    )
}

export default ProfileImage_Mobile;
