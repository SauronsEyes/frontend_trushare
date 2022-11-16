import React from 'react';
import { useEffect, useState } from 'react';
import BannerVideo from '../resources/videos/DSC_0277.MOV';
import pathVector from '../resources/img/path.svg';

import StairsImg1 from '../resources/img/DSC_0267.JPG';

const LandingPage = () => {
    const [randomText,setRandomText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum ");  
    useEffect(()=>{
        setInterval(function updateRandomText(){
            setRandomText(randomText => randomText.substring(1,randomText.length)+ randomText.charAt(0))          
        },100)
    },[])
    
  
    return (  
        <div className="landingContainer">
           
            <div className="bannerContainer">
                <div className='bannerVideoContainer d-flex justify-content-center align-items-center'>
                    <video muted autoPlay loop className='bannerVideo'>
                        <source src={BannerVideo} type="video/mp4" />
                    </video>
                </div>
                <div className='bannerHeadingContainer d-flex justify-content-center align-items-center'>
                    <h1>
                        <span className="Hletter">M</span>
                        <span className="Hletter">A</span>
                        <span className="Hletter">D</span>
                        <span className="Hletter">M</span>
                        <span className="Hletter">A</span>
                        <span className="Hletter">N</span>
                    </h1>
                </div>  
                <div className="textBorderLeft textBorder">
                    {randomText}
                </div> 
                <div className="textBorderRight textBorder">
                    {randomText}
                </div> 
                <div className="textBorderTop textBorder">
                    {randomText}
                </div> 
                <div className="textBorderBottom textBorder">
                    {randomText}
                </div> 
            </div>
            <div className="pathToContainer d-flex justify-content-center align-items-center">
                <div className="pathHeading ">
                    <h1>The<br/>path to<br/><span>madness</span></h1>
                </div>
                <div className="pathContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    <br/>
                    <br/>
                    Nulla quis nisl ultrices, aliquam turpis id, venenatis orci. Maecenas viverra viverra est quis sagittis. Nam eget lacus dolor. Proin nec nisl nec ante vehicula mollis id et massa. Suspendisse pharetra justo a ipsum porttitor tincidunt. Nulla tempus consectetur mi, quis vehicula augue finibus ac. Ut malesuada ligula lacus, quis fermentum nisl semper ac. Pellentesque sit amet rutrum augue, at elementum risus. Curabitur a metus enim. Suspendisse tristique, lacus vitae luctus pellentesque, quam elit ornare lorem, eget finibus dolor mi vel ligula. Curabitur id massa at nisi tincidunt ornare. Suspendisse blandit vulputate mauris, et rhoncus turpis faucibus et.
                    <br/>
                    <br/>
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas at sodales felis, sed blandit turpis. Duis a quam id ex fermentum imperdiet. Pellentesque hendrerit est in quam luctus rutrum. Maecenas ut risus maximus, dapibus sapien in, congue sem. Sed eu lorem sit amet nisl imperdiet maximus non a arcu. Cras libero neque, pellentesque at leo nec, mattis dignissim ligula. Aenean pulvinar, ex non ultricies egestas, dui mi eleifend est, sit amet tincidunt turpis tellus nec enim. Donec volutpat lorem vitae laoreet molestie. Proin semper imperdiet justo, sed malesuada lorem efficitur vitae. Morbi eget leo ligula. Nunc nec risus at sapien bibendum congue. In elementum ex sapien, nec accumsan diam suscipit at.


                </div>
                <svg width="1014" height="660" viewBox="0 0 1014 660" fill="none" xmlns="http://www.w3.org/2000/svg" className='pathVector'>
                    <path d="M8.5 652L149.5 544L265 373L566.5 239L648.5 146L1005.5 8.5" stroke="white" strokeWidth="3" strokeDasharray="20 20"/>
                </svg>
            </div>
            <div className="stairsContainer">
                <h1><span>Through</span> The Stairs of <span>Madness</span></h1>
                <div className="stairsImgContainer d-flex justify-content-center align-items-center">
                   <img src={StairsImg1} className="stairsImg StIm1"/>
                   <img src={StairsImg1} className="stairsImg StIm2"/>
                   <img src={StairsImg1} className="stairsImg StIm3"/>
                   <img src={StairsImg1} className="stairsImg StIm4"/>
                   <img src={StairsImg1} className="stairsImg StIm5"/>
                </div>
            </div>
            <div className="pathToContainer d-flex justify-content-center align-items-center signsContainer">
                
                <div className="pathContent">
                    <h2>Money isn't the end goal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    </p>
                    <h2>Money isn't the end goal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    </p>
                    <h2>Money isn't the end goal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    </p>
                    <h2>Money isn't the end goal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    </p>
                    <h2>Money isn't the end goal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit urna aliquet lorem venenatis semper. Sed sed scelerisque mi. Sed commodo libero a purus consequat facilisis. Proin vitae venenatis sapien, quis vehicula erat. Ut porta rhoncus nunc. Praesent sed dui quis massa egestas auctor id ac orci. Donec suscipit maximus consequat. Curabitur posuere laoreet odio in congue. Quisque in iaculis ipsum. Sed ligula libero, congue eu dignissim non, fringilla ut dolor.
                    </p>

                </div>
                <div className="pathHeading ">
                    <h1>Signs<br/>You're A<br/><span>Madman</span></h1>
                </div>
               
            </div>
        </div>
    );
}
 
export default LandingPage;