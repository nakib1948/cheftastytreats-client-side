import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import loginbackground from "../../assets/LoginBackground.jpg";
import login from "../../assets/Login.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const auth = getAuth();
  const navigate=useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo=form.photo.value;

    console.log(name, email, password,photo);

    if (name === "" || email === "" || password === "" || photo==="") {
      
      return toast.warn(' Please fill out the empty field!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    if(password.length<6)
    {
       return toast.warn('password should be atleast 6 characters', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        }).then(() => {

          form.reset()
          navigate('/')
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        console.log(user);
      })
      .then((error) => console.log(error));
  };
  return (
    <div ref={ref}>
    <motion.div
         initial="hidden"
         animate={inView ? "visible" : "hidden"} // Use inView to control the animation
         variants={variants}
         transition={{ duration: 1.5 }}
    >
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
      }}
    >
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img className="rounded-full" src={login} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold">Signup</h3>

            <form onSubmit={handlesignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  name="photo"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-bold">
                Sign In
              </Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default Signup;
