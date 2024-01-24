import { Logo, FormRow } from "../../components";
import Wrapper from "../../../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
const Login = () => {
  return (
    <div className=" ">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="auth-wrapper auth-basic px-2">
            <div className="auth-inner my-2">
              <div className="card mb-0">
                <div className="card-body">
                  <Link to="/" className="brand-logo">
                    <h2 className="brand-text text-primary ms-1">Admin</h2>
                  </Link>

                  <h4 className="card-title mb-1">
                    Welcome to Admin Panel! 👋
                  </h4>
                  <p className="card-text mb-2">
                    Please sign-in to your account and start the adventure
                  </p>

                  <form className="auth-login-form mt-2" method="POST">
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

                    <button className="btn btn-primary w-100" tabindex="4">
                      Sign in
                    </button>
                  </form>

                  <p className="text-center mt-2">
                    <span>New on our platform?&nbsp;</span>
                    <Link to="/register" className="member-btn">
                      Create an account
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
export default Login;
