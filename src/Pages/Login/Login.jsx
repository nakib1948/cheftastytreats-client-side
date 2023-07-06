import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import login from '../../assets/Login.jpg'
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import loginbackground from '../../assets/LoginBackground.jpg'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const { signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(user);
        navigate(from, { replace: true });
        
      })
      .catch((error) => {
        toast.warn('Please enter correct email and password', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200"
    style={{ backgroundImage: `url(${loginbackground})`, backgroundSize: "cover" }}
    >
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img className="rounded-full" src={login} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body text-center">
            <h3 className="text-5xl font-bold">Login</h3>

            <form onSubmit={handlelogin}>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
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
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4">
              New to Car Doctors?{" "}
              <Link to="/signup" className="text-orange-500 font-bold">
                Sign Up
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;