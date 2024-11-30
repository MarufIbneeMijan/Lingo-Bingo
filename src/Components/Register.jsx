import React, { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
const Register = () => {
  const { registerUser } = useContext(authContext);
    const navegate = useNavigate()
  const handleRegister = (event) => {
    toast("Singup Successfully")
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    registerUser(email,password)
    .then(user=>{
       navegate("/")
    })
  };
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
               <Helmet>
            <title>Reg</title>
           </Helmet>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                <button onClick={handleShowPassword}>Show Password</button>
              </label>
              <input
                 type={showPassword ? "password" : "text"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>Already Have A Account?? <Link className="text-red-700" to={"/login"} >Log In Now</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
