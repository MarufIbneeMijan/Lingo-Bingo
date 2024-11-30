import React from "react";
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import Header from "./Header";
import Footer from "./Footer";
const Tutorial = () => {
  return (
    <div >
        <Header></Header>
      <h1 className="text-4xl text-center font-SourGummy" >Here are Some Tutorial Videos For You</h1>
      <Helmet>
        <title>Tutorial</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">

     
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/E6588DlZW-c?si=8TCOeGPsp1_OCLZf'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/KvBxUHi8kkI?si=D_r9QjxegOKMQQ3r'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
   
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/qYsHLUAlH_8?si=eaKUoC3IAB6xrrkQ'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/gbJFgilQjJA?si=KtjZg-Q15dpsU8Ow'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/gbJFgilQjJA?si=KtjZg-Q15dpsU8Ow'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/gbJFgilQjJA?si=KtjZg-Q15dpsU8Ow'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
      <div>
    
     <iframe
  src='https://www.youtube.com/embed/gbJFgilQjJA?si=KtjZg-Q15dpsU8Ow'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowFullScreen
  title='video'
/>
     
     
       
      </div>
   
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Tutorial;
