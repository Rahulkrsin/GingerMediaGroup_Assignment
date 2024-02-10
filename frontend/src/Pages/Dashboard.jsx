import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userI from "../user.jpg";

import { update, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

// import "../css/register.css";
// import "../css/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: user ? user.name : " ",
    email: user ? user.email : " ",
    contact: user ? user.contact : " ",
    dob: user ? user.dob : " ",
    password: user ? user.password : " ",
  });
  const { name, email, contact, password, dob } = formData;

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }

    // dispatch(getContact());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, dispatch, navigate]);

  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dobDate.getFullYear();

    // Adjust age if the current date hasn't reached the birthdate yet this year
    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !password || !dob) {
      toast.error("all field is required");
    } else {
      dispatch(update(formData));
      setEdit(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (isLoading) {
    return <h1>loading....</h1>;
  }
  return !edit ? (
    <div className="main-container">
      <div class="shape1"></div>
      <div class="shape2"></div>
      <div className="user-container">
        <img className="user-img" src={userI} alt="" />
        <div className="social-icons">
          <a href="#" className="icons">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="icons">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="icons">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="icons">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        {user && (
          <div className="user-details">
            <p>
              Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{user.name}</span>
            </p>
            <p>
              Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{user.email}</span>
            </p>
            <p>
              Phone No. <span>{user.contact}</span>
            </p>
            <p>
              Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span>{calculateAge(user.dob)}</span>
            </p>
          </div>
        )}

        <button
          id="btn"
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  ) : (
    <div className="main-container">
      <div class="shape1"></div>
      <div class="shape2"></div>
      <div className={`container singin`} id="container">
        <div className={`form-container sign-in `}>
          {user && (
            <form onSubmit={handleSubmit}>
              <h1>Update Profile</h1>
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
                type="text"
                id="phone"
                name="contact"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Phone Number"
                value={contact}
                onChange={handleChange}
              ></input>

              <a href="">Forgot your email or password?</a>
              <button>Update Profile</button>
            </form>
          )}
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
  );
};

export default Dashboard;
