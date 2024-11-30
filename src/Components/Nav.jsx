import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    
  const {singOutUser,currentUser}= useContext(authContext)
  
  
  return (
        <div>
            <div className="flex-none gap-2 font-SourGummy">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={currentUser?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
         <Link to={"/profile"} >Profile</Link>
        </li>
        <li><a>Settings</a></li>
        <li> <button onClick={singOutUser} >Logout</button> </li>
      </ul>
    </div>
  </div>
        </div>
    );
};

export default Nav;