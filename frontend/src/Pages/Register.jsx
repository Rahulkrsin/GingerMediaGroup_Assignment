import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSucess, user, msg } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    password: "",
  });

  const { name, email, contact, password, dob } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }

    if (user) {
      toast.success("sucess");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, user, isSucess, msg, dispatch, navigate]);

  //geting inputed data when change happen
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !password || !dob) {
      toast.error("all field is required");
    } else {
      dispatch(register(formData));
    }
  };
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div className="main-container">
        <div class="shape1"></div>
        <div class="shape2"></div>
        <div className={`container singin`} id="container">
          <div className={`form-container sign-in `}>
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <span>or use your email and password</span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Email or Phone Number"
                name="email"
                value={email}
                onChange={handleChange}
              />

              <input
                type="date"
                id="birthday"
                name="dob"
                value={dob}
                onChange={handleChange}
              />
              <input
                type="text"
                id="phone"
                name="contact"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Phone Number"
                value={contact}
                onChange={handleChange}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <a href="">Forgot your email or password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className={`toggle-panel toggle-left active`}>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button className="hidden" onClick={() => {}} id="login">
                  <Link to={"/login"}> Sign In</Link>
                </button>
              </div>
              <div className={`toggle-panel toggle-right active`}>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button className="hidden" onClick={() => {}} id="register">
                  <Link to={"/login"}>Login</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
