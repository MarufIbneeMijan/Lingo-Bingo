import React, { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginUser, singInWithGoogle } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(true);
  const loacation = useLocation();
  const navegate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    toast("LogIn Successfully");
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
    .then((res) => {
      
      navegate(loacation?.state ? loacation.state : "/");
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.log(errorMessage)
    })
    
    

    
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleGoogleSingIn = () => {
    singInWithGoogle().then(() => {
      navegate(loacation?.state ? loacation.state : "/");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen font-SourGummy overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <ToastContainer />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-3">Login</button>
            </div>
          </form>
          <button
            className="flex btn btn-primary items-center gap-2 boder-2"
            onClick={handleGoogleSingIn}
          >
            <FaGoogle></FaGoogle> Sing in With Google
          </button>
          <p>
            Don't Have A Account??{" "}
            <Link className="text-red-700" to={"/reg"}>
              Register Now
            </Link>
          </p>
        <div>
         
        </div>
        </div>
      </div>
      <Helmet>
            <title>Login</title>
           </Helmet>
    </div>
  );
};

export default Login;
