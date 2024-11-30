import React, { useContext } from 'react';
import Header from './Header';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const StartLesson = () => {
  
   const lessons = [1,2,3,4,5,6,7,8,9,10]
    
    return (
        <div className='font-SourGummy' >
           <Header></Header>
           <Helmet>
            <title>Start-Lesson</title>
           </Helmet>
          <div className='grid grid-cols-2 gap-7 ' >
          {
                lessons.map(lesson=> <div className='alert alert-info' >
                    <Link className='text-center' to={`/lesson/${lesson}`} >Lesson Number: {lesson}</Link>
                    </div>)
            }
          </div>
        </div>
    );
};

export default StartLesson;