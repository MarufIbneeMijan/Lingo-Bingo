import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Vocabs from './Vocabs';
import Header from './Header';
import Footer from './Footer';

const Lesson = () => {
    
    const data = useLoaderData()
    const p= useParams()
  
    const match =   data.filter(lesson=>lesson.Lesson_no == p.id)
   
    return (
        <div className='font-SourGummy' >
            <Header></Header>
            <h1 className='text-4xl text-blue-300 '>Lesson Number : {p.id}</h1>
           <div className='grid md:grid-cols-3 gap-3 font-SourGummy'>
           {
                match.map(vocabs=> <Vocabs vocabs={vocabs}  ></Vocabs> )
            }
           </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Lesson;