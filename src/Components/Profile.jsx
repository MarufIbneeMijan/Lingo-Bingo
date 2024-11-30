import React, { useContext, useEffect } from "react";
import { authContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Profile = () => {
  const { handleupdateProfile, currentUser } = useContext(authContext);
  

  


    const updatePro= (event)=>{
        event.preventDefault();
        const name = event.target.name.value
        const PhotoURL = event.target.PhotoURL.value
        handleupdateProfile(name,PhotoURL)
        .then(()=>{
           toast("Profile Updated Succesfully||Please Refresh Page");
        })
      }


 
  return (
    <div>
        <div>
        <h1 className="text-2xl">Your Display name is : {currentUser?.displayName}</h1>
        <img src={currentUser?.photoURL} alt={currentUser?.PhotoURL}/> 
        </div>
      <form onSubmit={updatePro} >
        <input
          type="text"
          name="name"
          placeholder="Your Display Name"
          className="input input-bordered w-full max-w-xs"
        />
         <ToastContainer />
        <input
          type="text"
          name="PhotoURL"
          placeholder="Your Photo URL"
          className="input input-bordered w-full max-w-xs"
        /> <br />
      <button className="btn btn-primary mt-5" >Submit</button>
      </form>
     <Link to={"/"} >Back To Home</Link>
     <Helmet>
            <title>Profile</title>
           </Helmet>
    </div>
  );
};

export default Profile;
