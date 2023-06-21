import React from "react";

import {mobile_size} from "../../config/Responsive/RWD";
import ImageList from "../../Component/SimpleComponent/Image/ImageList/imageList";
import TextHeader from "../../Component/SimpleComponent/Title/TextHeader/TextHeader";
import TextBox from "../../Component/SimpleComponent/Text/TextBox/TextBox";
import {construction_text, mechanic_text} from "./Data";
import SimpleButton from "../../Component/SimpleComponent/Button/SimpleButton/SimpleButton";
import ImageProfile from "../../Media/ImageList/profileImage.jpeg";
import Table from "../../Component/SemiComplexComponent/Table/Table/Table";
import ClickIcon from'../../Media/Home/table/button.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';


import Image1 from '../../Media/Home/ImageList/pexels-andrea-piacquadio-3807329.jpg';
import Image2 from '../../Media/Home/ImageList/pexels-tamil-vanan-4966809.jpg';

// import {ArrowBackIosOutlined} from "@material-ui/icons";

export const BoxLargeElement =()=>{

    if(window.innerWidth <= mobile_size){


        return(

            <div style={{width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px'}}>


                <div style={{width:'100%', height:'50%', position:'absolute', left:'0px', top:'0px'}}>

                    <ImageList imageList={[

                        Image1,
                        Image2,


                    ]} />

                </div>

                <div style={{width:'100%', height:'50%', position:'relative', right:'0%', top:'45%'}}>

                    <div style={{width:'40%', height:'10%', position:'absolute', right:'10%', top:'0%'}}>

                        <TextHeader title1='تعمیرات ماشین' title2='تعمیرات ساختمان' />

                    </div>

                    <div style={{width:'75%', height:'80%', position:'absolute', right:'10%', top:'18%'}}>

                        <TextBox text1={mechanic_text} text2={construction_text} />

                    </div>


                </div>

            </div>


        )



    }else{

        return(

            <div style={{width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px'}}>





                <div style={{width:'50%', height:'80%', position:'relative', left:'50%', top:'10%'}}>

                    <div style={{width:'60%', height:'10%', position:'absolute', right:'10%', top:'0%'}}>

                        <TextHeader title1='تعمیرات ماشین' title2='تعمیرات ساختمان' />

                    </div>

                    <div style={{width:'80%', height:'80%', position:'absolute', right:'10%', top:'18%'}}>

                        <TextBox text1={mechanic_text} text2={construction_text} />

                    </div>


                </div>

            </div>


        )


    }


}


export const SignupLoginButton = ()=>{


    return(


        <div style={{width:'100%', height:'100%', position:'relative' }}>

            <ImageList  imageList={[

                Image1,
                Image2,


            ]} />
            <div style={{width:'50%', height:'100%', position:'absolute', left:'0px', top:'0px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>

                <SimpleButton text={'ثیت نام'} style={{backgroundColor:'#a41731', color:'white'}} pushLink={'/test/component/table/table-row/'} icon={<PersonAddIcon />} />

            </div>

            <div style={{width:'50%', height:'100%', position:'absolute', left:'50%', top:'0%', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center' }}>

                <SimpleButton text={'ورود'} style={{backgroundColor:'#1734a4', color:'white'}} pushLink={'/test/component/table/table-row/'} icon={<LoginIcon />} />

            </div>

        </div>


    )

}


export const TableGenerator =()=>{


    return(

        <div style={{width:'100%', height:'100%', position:'relative' }}>

            <Table

                tableStyle={{backgroundColor:'rgba(0,0,0,0)', width:'80%', height:'500px', position:'relative', textAlign:'center', marginLeft:'10%', marginTop:'0px', paddingTop:'50px'}}
                header={[

                    {
                        name:'first',
                        style:{width:'12.5%', height:'100%', position:'absolute', top:'0%', right:'0%', backgroundColor:'rgba(0,0,0,0)', color:'white'},
                        text:'',

                    },

                    {
                        name:'first',
                        style:{width:'25%', height:'100%', position:'absolute', top:'0%', right:'12.5%', backgroundColor:'rgba(0,0,0,0)', color:'white'},
                        text:'نام و نام خانوادگی',

                    },


                    {
                        name:'first',
                        style:{width:'25%', height:'100%', position:'absolute', top:'0%', right:'37.5%', backgroundColor:'rgba(0,0,0,0)', color:'white'},
                        text:'زمینه فعالیت',

                    },


                    {
                        name:'first',
                        style:{width:'25%', height:'100%', position:'absolute', top:'0%', right:'62.5%', backgroundColor:'rgba(0,0,0,0)', color:'white'},
                        text:'زمان ثبت نام',

                    },


                    {
                        name:'first',
                        style:{width:'12.5%', height:'100%', position:'absolute', top:'0%', right:'87.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                        text:'',

                    },


                ]}

                headerRowStyle={{

                    desktop_style:{

                        width:'100%',
                        height:'100px',
                        backgroundColor:'#3F1225FF',
                        textAlign:'center',
                        position:'relative',
                        opacity:'0',
                        animation:'ease-in-out table-row-animation forwards',
                        animationDuration:'1.5s',
                        borderRadius:'0px',
                        color:'white',


                    },
                    mobile_style:{

                        width:'100%',
                        height:'50px',
                        backgroundColor:'#3F1225FF',
                        textAlign:'center',
                        position:'relative',
                        opacity:'0',
                        animation:'ease-in-out table-row-animation forwards',
                        animationDuration:'1.5s',
                        borderRadius:'0px',
                        color:'white',

                    }

                }
                }

                rowsData={
                    [
                        {
                            body:[

                                {
                                    name:'second',
                                    styleDesktop:{width:'70px',  height:'70px', marginTop:'7.5px' , position:'absolute', top:'0%', right:'50px', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    styleMobile:{width:'28px', height:'28px', position:'absolute', top:'5px', right:'5px', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'profile-image',
                                    image:ImageProfile

                                },
                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'12.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'علی بهرامی',
                                    type:'text'

                                },

                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'37.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'تعمیر خودرو',
                                    type:'text'

                                },

                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'62.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'1401/2/5 8:50:23',
                                    type:'text'

                                },

                                {


                                    name:'second',
                                    styleDesktop:{width:'60px', height:'60px', marginTop:'7px' , position:'absolute', top:'5px', right:'90%', backgroundColor:'rgba(0,0,0,0)', color:'black', backgroundImage:'none'},
                                    styleMobile:{width:'30px', height:'30px', position:'absolute', top:'5px', right:'90%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'button',
                                    image:ClickIcon,
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
                                    name:'second',
                                    styleDesktop:{width:'70px',  height:'70px', marginTop:'7.5px' , position:'absolute', top:'0%', right:'50px', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    styleMobile:{width:'28px', height:'28px', position:'absolute', top:'5px', right:'5px', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'profile-image',
                                    image:ImageProfile

                                },
                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'12.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'علی بهرامی',
                                    type:'text'

                                },

                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'37.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'تعمیر خودرو',
                                    type:'text'

                                },

                                {
                                    name:'first 1-1',
                                    style:{width:'25%', height:'100%', position:'absolute', top:'0px', right:'62.5%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    text:'1401/2/5 8:50:23',
                                    type:'text'

                                },

                                {


                                    name:'second',
                                    styleDesktop:{width:'60px', height:'60px', marginTop:'7px' , position:'absolute', top:'5px', right:'90%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    styleMobile:{width:'30px', height:'30px', position:'absolute', top:'5px', right:'90%', backgroundColor:'rgba(0,0,0,0)', color:'black'},
                                    type:'button',
                                    image:ClickIcon,
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


            />
        </div>

    )


}