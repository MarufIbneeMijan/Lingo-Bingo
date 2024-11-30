import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Teachers from '../Components/Teachers';
import Aos from 'aos';

import "aos/dist/aos.css"
import General from '../Components/General';
import { Helmet } from 'react-helmet-async';

const HomeLayout = () => {
    useEffect(()=>{
        Aos.init(
            {
                duration:600
            }
        )
    },[])
    
    const loacation = useLocation()
   const {currentUser} = useContext(authContext)
  
    return (
        <div className='font-SourGummy grid grid-cols-1'>
           <Helmet>
            <title>Home</title>
           </Helmet>
           
            <header className='' data-aos="flip-left" >
                <Header></Header>
               {
                (loacation.pathname==="/"||loacation.pathname==="/about" ?  <Banner></Banner>:"" )
               }
             
            </header>
           <main >
               <Outlet></Outlet>
               
           </main>
           <section className='w-full' data-aos="flip-left" >
               <Teachers></Teachers>
           </section>
           <section data-aos="fade-left" >
            <General></General>
           </section>
           <footer>
               <Footer></Footer>
           </footer>
        </div>
    );
};

export default HomeLayout;