// package
import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// media
import ImageProfile from './Media/ImageList/profileImage.jpeg';


// Component
import HomeHeaderBackground from "./Component/SimpleComponent/Background/HomeHeaderBackground/HomeHeaderBackground";
import HomeHeaderTitle from "./Component/SimpleComponent/Title/HomeheaderTitle/HomeheaderTitle";
import BoxLarge from "./Component/SimpleComponent/Box/BoxLarg/BoxLarge";
import ImageList from "./Component/SimpleComponent/Image/ImageList/imageList";
import TextHeader from "./Component/SimpleComponent/Title/TextHeader/TextHeader";
import TextBox from "./Component/SimpleComponent/Text/TextBox/TextBox";
import TableCellText from "./Component/SimpleComponent/Table/TableCellText/TableCellText";
import ProfileImage from "./Component/SimpleComponent/Image/ProfileImage/ProfileImage";
import TableCellButtonImage from "./Component/SimpleComponent/Table/TableCellButtonImage/TableCellButtonImage";
import TableRow from "./Component/SimpleComponent/Table/TableRow/TableRow";
import SimpleButton from "./Component/SimpleComponent/Button/SimpleButton/SimpleButton";
import Table from "./Component/SemiComplexComponent/Table/Table/Table";

// Pages
import Home from "./Page/Home/Home";
import Box from "./Component/SimpleComponent/Box/Box/Box";


const main = createRoot(document.getElementById('root'));

main.render(

    <Router>

        <Routes>

            {/* Pages */}
            <Route path='/' element={<Home />} />


            {/*  Test URL */}

            {/* Component */}

            <Route path='test/component/background/home-header-background/' element={<HomeHeaderBackground />} />
            <Route path='test/component/title/home-header-title/' element={<HomeHeaderTitle title='اینجا همه روزه کار هست !!' />} />
            <Route path='test/component/title/text-header/' element={<TextHeader title1='اینجا همه روزه کار هست !!' title2='اینجا ' />} />
            <Route path='test/component/box/box-large/' element={<BoxLarge desktop_scroll_height={0} mobile_scroll_height={0} />} />
            <Route path='test/component/box/box/' element={<Box desktop_scroll_height={0} mobile_scroll_height={0}  style={{width:'50%', height:'150px'}} />} />
            <Route path='test/component/image/image-list/' element={<ImageList />} />
            <Route path='test/component/image/profile-image/' element={<ProfileImage styleDesktop={{position:'absolute', height:'100px', width:'100px'}} styleMobile={{position:'absolute', height:'50px', width:'50px'}} image={ImageProfile} />} />
            <Route path='test/component/text/text-box/' element={<TextBox text1={'سلام عزیزانم'} text2={'نمیلن'} />} />
            <Route path='test/component/table/table-cell-text/' element={<TableCellText style={{}} text={'سلام'} />} />
            <Route path='test/component/table/table-cell-button/' element={<TableCellButtonImage styleDesktop={{position:'absolute', height:'100px', width:'100px', textAlign:'center'}} styleMobile={{position:'absolute', height:'50px', width:'50px'}} image={ImageProfile} pushLink={'/test/component/background/home-header-background/'} />} />
            <Route path='test/component/table/table-row/' element={<TableRow styleDesktop={{width:'95%', height:'100px', textAlign:'center', }} styleMobile={{width:'95%', height:'50px', textAlign:'center', }} content={<></>} />} />
            <Route path='test/component/button/simple-button/' element={<SimpleButton text={'ثیت نام'} style={{backgroundColor:'red', borderColor:'red'}} pushLink={'/test/component/table/table-row/'} />} />

            {/*Semi component*/}

            <Route path='test/semi-component/table/' element={<Table

                tableStyle={{backgroundColor:'rgba(0,0,0,0)', width:'80%', height:'500px', position:'relative', textAlign:'center', marginLeft:'10%', marginTop:'150px'}}
                header={[

                {
                    name:'first',
                    style:{width:'50%', height:'100%', position:'absolute', top:'0%', right:'50%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                    text:'first Text',

                },

                {
                    name:'first',
                    style:{width:'50%', height:'100%', position:'absolute', top:'0%', right:'0%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                    text:'second Text',

                },

                ]}

                headerRowStyle={{

                    desktop_style:{

                        width:'100%',
                        height:'100px',
                        backgroundColor:'#4F709C',
                        textAlign:'center',
                        position:'relative',
                        opacity:'0',
                        animation:'ease-in-out table-row-animation forwards',
                        animationDuration:'1.5s',
                        borderRadius:'0px',


                },
                    mobile_style:{

                        width:'100%',
                        height:'50px',
                        backgroundColor:'#4F709C',
                        textAlign:'center',
                        position:'relative',
                        opacity:'0',
                        animation:'ease-in-out table-row-animation forwards',
                        animationDuration:'1.5s',
                        borderRadius:'0px',

                    }

                }
            }

                rowsData={
                    [
                        {
                            body:[

                                {
                                    name:'first',
                                    style:{width:'50%', height:'100%', position:'absolute', top:'0%', right:'0%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'first Text',
                                    type:'text',

                                },

                                {
                                    name:'second',
                                    styleDesktop:{width:'70px',  height:'70px', marginTop:'7.5px' , position:'absolute', top:'0%', right:'70%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    styleMobile:{width:'35px', height:'35px', position:'absolute', top:'0%', right:'70%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'profile-image',
                                    image:ImageProfile

                                },

                            ],


                            style:{

                                desktop_style:{

                                    width:'100%',
                                    height:'85px',
                                    backgroundColor:'#D8C4B6',

                                    textAlign:'center',
                                    marginTop:'10px',
                                    position:'relative',
                                    opacity:'0',
                                    animation:'ease table-row-animation 1.5s forwards',
                                    animationDelay:'1s',

                                },
                                mobile_style:{

                                    width:'100%',
                                    height:'40px',
                                    backgroundColor:'#D8C4B6',

                                    textAlign:'center',
                                    marginTop:'5px',
                                    position:'relative',
                                    opacity:'0',
                                    animation:'ease table-row-animation 1.5s forwards',
                                    animationDelay:'1s',

                                }

                            }



                        },


                        {
                            body:[

                                {
                                    name:'first 1-1',
                                    style:{width:'50%', height:'100%', position:'absolute', top:'0px', right:'0%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'first Text 1-1',
                                    type:'text'

                                },

                                {
                                    name:'second',
                                    styleDesktop:{width:'70px', height:'70px', marginTop:'7px' , position:'absolute', top:'0%', right:'70%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    styleMobile:{width:'40px', height:'40px', position:'absolute', top:'0%', right:'70%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'button',
                                    image:ImageProfile,
                                    pushLink:'/test/component/background/home-header-background/'

                                },

                            ],


                            style:{

                                desktop_style:{

                                    width:'100%',
                                    height:'85px',
                                    backgroundColor:'#D8C4B6',
                                    textAlign:'center',
                                    marginTop:'10px',
                                    position:'relative',
                                    animation:'ease table-row-animation 1.5s forwards',
                                    animationDelay:'2s',
                                    opacity:'0',

                                },
                                mobile_style:{


                                    width:'100%',
                                    height:'40px',
                                    backgroundColor:'#D8C4B6',

                                    textAlign:'center',
                                    marginTop:'5px',
                                    position:'relative',
                                    opacity:'0',
                                    animation:'ease table-row-animation 1.5s forwards',
                                    animationDelay:'1.5s',

                                }

                            }



                        },


                    ]









                }


            />} />



        </Routes>


    </Router>

)
