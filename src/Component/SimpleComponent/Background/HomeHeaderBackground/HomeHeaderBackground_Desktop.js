// package
import React, {useState} from "react";


// Media
import Card from "@mui/material/Card";
import {CardMedia, Typography} from "@mui/material";
import {headerCard, headerImage, headerText} from "./Css/main";
import './Css/main.css';

// media
import HeaderImage1 from './media/Desktop/0.jpg'
import HeaderImage2 from './media/Desktop/1.jpg'
import HeaderImage3 from './media/Desktop/2.jpg'
import HeaderImage4 from './media/Desktop/3.jpg'
import HeaderImage5 from './media/Desktop/4.jpg'
import HeaderImage6 from './media/Desktop/5.jpg'
import HeaderImage7 from './media/Desktop/6.jpg'
import HeaderImage8 from './media/Desktop/7.jpg'


function HomeHeaderBackground_Desktop(){

    const img_list = [

        HeaderImage1,
        HeaderImage2,
        HeaderImage3,
        HeaderImage4,
        HeaderImage5,
        HeaderImage6,
        HeaderImage7,
        HeaderImage8,

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
                style={headerImage}

            />

            <Typography variant={'h2'} style={headerText}>

                اینجا همه روز کار هست‌

            </Typography>

        </Card>


    )


}

export default HomeHeaderBackground_Desktop;