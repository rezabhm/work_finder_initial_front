// package
import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// component
import HomeHeaderBackground from "./Component/Background/HomeHeaderBackground/HomeHeaderBackground";
import HomeHeaderTitle from "./Component/Title/HomeheaderTitle/HomeheaderTitle";
import BoxLarge from "./Component/Box/BoxLarg/BoxLarge";
import ImageList from "./Component/Image/ImageList/imageList";
import TextHeader from "./Component/Title/TextHeader/TextHeader";


const main = createRoot(document.getElementById('root'));

main.render(

    <Router>

        <Routes>

            {/*  Test URL */}
            <Route path='test/component/background/home-header-background/' element={<HomeHeaderBackground />} />
            <Route path='test/component/title/home-header-title/' element={<HomeHeaderTitle title='اینجا همه روزه کار هست !!' />} />
            <Route path='test/component/title/text-header/' element={<TextHeader title1='اینجا همه روزه کار هست !!' title2='اینجا ' />} />
            <Route path='test/component/box/box-large/' element={<BoxLarge desktop_scroll_height={0} mobile_scroll_height={0} />} />
            <Route path='test/component/image/image-list/' element={<ImageList />} />

        </Routes>


    </Router>

)