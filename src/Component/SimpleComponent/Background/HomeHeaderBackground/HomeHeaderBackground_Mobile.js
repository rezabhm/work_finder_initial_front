// package
import React, {useState} from "react";


// Media
import Card from "@mui/material/Card";
import {CardMedia, Typography} from "@mui/material";
import {headerCard, headerText} from "./Css/main";

import HeaderImage1 from "./media/Mobile/0.jpeg";
import HeaderImage2 from "./media/Mobile/1.jpg";
import HeaderImage3 from "./media/Mobile/2.jpg";


function HomeHeaderBackground_Mobile(){

    const img_list = [

        HeaderImage1,
        HeaderImage2,
        HeaderImage3,

    ]

    const [array_index, setArrayIndex ]= useState(0)

    const _ = setInterval(()=>{setArrayIndex(array_index + 1)}, 10000)

    return(

        <Card style={headerCard} >

            <CardMedia

                component='img'
                image={img_list[(array_index % img_list.length).toFixed()]}
                title='header'
                alt='header-background'
                style={{height:window.innerHeight.toString()+'px', width:'100%'}}

            />

            <Typography variant={'h5'} style={headerText}>

                اینجا همه روز کار هست‌

            </Typography>

        </Card>


    )

}

export default HomeHeaderBackground_Mobile;