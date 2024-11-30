import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Vocabs = ({ vocabs }) => {
  const { difficulty, meaning,word,pronunciation,part_of_speech,when_to_say,example} = vocabs;

  return (
    <div>
       <Helmet>
            <title>Vocabs</title>
           </Helmet>
       <div className={`card text-black w-96" ${difficulty=="easy"?"bg-yellow-200":"bg-red-500"}`}>
  <div className="card-body">
    <h2 className="card-title">{word}</h2>
    <p>{pronunciation}</p>
    <p>{part_of_speech}</p>
    <p>{example}</p>
    <div className="card-actions justify-end">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>More Details</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Meaning:{meaning}</h3>
    <p className="py-4">When To Say{when_to_say}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Back To Lesson</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{difficulty}</div>
      
    </div>
  </div>
</div>
     
    </div>
  );
};

export default Vocabs;
