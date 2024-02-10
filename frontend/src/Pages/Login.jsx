import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { isLoading, isError, user, msg } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }

    if (user) {
      toast.success("Login successful!");
      navigate("/");
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, user, msg, dispatch, navigate]);

  const { email, password } = formData;

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

    if (!email || !password) {
      toast.error("all field is required");
    } else {
      dispatch(login(formData));
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
              <h1>Sign In</h1>
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
                placeholder="Email or Phone Number"
                name="email"
                value={email}
                onChange={handleChange}
              />
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
                <h1>Hello, User!</h1>
                <p>
                  Register with your personal details to use all site features
                </p>
                <button className="hidden" onClick={() => {}} id="register">
                  <Link to={"/signup"}>Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
