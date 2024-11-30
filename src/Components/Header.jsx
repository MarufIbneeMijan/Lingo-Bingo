import React, { useContext } from "react";
import Nav from "./Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Header = () => {
 const {currentUser}= useContext(authContext)
  const location = useLocation()
    return (
    <div className="flex md:flex-row justify-between bg-base-100 font-SourGummy">
      <div className="">
       <Link to={"/"} >Lingo Bingo</Link>
      </div>
      <div className="flex md:flex-row flex-col gap-4 ">
        {
          (location.pathname==="/about"?<NavLink to={"/"}>Home</NavLink>:<NavLink to={"/about"}>About</NavLink>)
        }
        {
          location.pathname==="/progress"?<NavLink to={"/start-learning"}>Go To Lesson </NavLink>:<NavLink to={"/progress"}>See Your Progress</NavLink>
        }
      {
        (location.pathname==="/"? <NavLink to={"start-learning"}>Start Learning</NavLink>:"")
      }
      {
        currentUser?.email? <NavLink to={"/Tutorial"} >Tutorials</NavLink>:""
      }
      </div>
      <div>
        {
            currentUser?.email ? <Nav></Nav> : <button><NavLink to={"login"}>Log In</NavLink></button>
        }
      
      </div>
    </div>
  );
};

export default Header;
