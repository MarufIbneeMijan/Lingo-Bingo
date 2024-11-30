import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const location= useLocation()
   
    
    return (
        <div
  className="hero min-h-screen mt-8"
  
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
     <Helmet>
            <title>Home || About</title>
           </Helmet>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Us</h1>
      <p className="mb-5">
      At Lingo Bingo, we're passionate about breaking down language barriers and opening doors to new cultures! We offer a fun and engaging learning environment for anyone interested in mastering Turkish, German, Japanese, or French. Whether you're a complete beginner or looking to polish your existing skills, our experienced instructors will guide you on your language journey.  Join us and discover the world of "Bonjour," "Konnichiwa," "Merhaba," and "Guten Tag!"
      </p>
    <Link className='btn btn-success' >Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default About;