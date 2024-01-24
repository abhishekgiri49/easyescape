import { Logo, FormRow } from "../../components";
import { Link } from "react-router-dom";
import img from "../../../assets/images/register.svg";
const Register = () => {
  return (
    <div class="app-content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
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
                  <form
                    class="auth-register-form mt-2"
                    action="index.html"
                    method="POST"
                  >
                    <FormRow
                      type="text"
                      name="username"
                      labeltext="Username"
                      placeholder="e.g. abc@123"
                    />
                    <FormRow
                      type="email"
                      name="email"
                      labeltext="Email"
                      placeholder="e.g. john@example.com"
                    />

                    <FormRow
                      type="password"
                      name="password"
                      labeltext="password"
                      placeholder="********"
                    />
                    <button class="btn btn-primary w-100" tabindex="5">
                      Sign up
                    </button>
                  </form>
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
