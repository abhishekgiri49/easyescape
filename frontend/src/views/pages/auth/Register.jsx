import img from "../../../assets/images/register.svg";
import { useState } from "react";
import { Logo, FormRow } from "../../components";
import { Link } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
import { AuthService } from "../../../repositories";
const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const registerForm = () => {
    const registerData = {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password,
    };

    AuthService.register(registerData)
      .then(() => {
        console.log("loggedIn");
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        console.log(error);
      });
    // api call
  };
  return (
    <div class="app-content">
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <div class="auth-wrapper auth-cover">
            <div class="auth-inner row m-0">
              <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                  <img class="img-fluid" src={img} alt="Register V2" />
                </div>
              </div>

              <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                  <h2 class="card-title fw-bold mb-1">
                    Adventure starts here 🚀
                  </h2>
                  <p class="card-text mb-2">
                    Make your app management easy and fun!
                  </p>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  )}

                  <FormRow
                    type="text"
                    name="firstName"
                    labeltext="First Name"
                    placeholder="e.g. john"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <FormRow
                    type="text"
                    name="lastName"
                    labeltext="Last Name"
                    placeholder="e.g. doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <FormRow
                    type="text"
                    name="username"
                    labeltext="Username"
                    placeholder="e.g. abc@123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FormRow
                    type="text"
                    name="phoneNumber"
                    labeltext="Phone Number"
                    placeholder="e.g. 1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <FormRow
                    type="email"
                    name="email"
                    labeltext="Email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <FormRow
                    type="password"
                    name="password"
                    labeltext="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    class="btn btn-primary w-100"
                    onClick={registerForm}
                    tabIndex="5"
                  >
                    Sign up
                  </button>

                  <p className="text-center mt-2">
                    <span>Already have an account? &nbsp;</span>
                    <Link to="/login" className="member-btn">
                      Sign in instead
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
