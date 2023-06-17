import React from "react";


import './Css/desktop.css';
import './Css/main.css';

function ProfileImage_Desktop(props){

    return(

        <div style={props.style} className='profile-image-div'>

            <img src={props.image} alt={'profile-image'} className='profile-image-desktop profile-image-img' />

        </div>

    )

}

export default ProfileImage_Desktop;

