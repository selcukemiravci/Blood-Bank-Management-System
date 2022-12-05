import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../Images/loogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/approved");
  };

  const registerRoute = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const forgotRoute = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <section className="h-100 gradient-form pb-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={logo} className="card-img" alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1"></h4>
                      </div>
                      <p className="d-flex justify-content-start">
                        Please login or register to donate or request blood
                        donation
                      </p>

                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                          <input
                            onBlur={handleEmailChange}
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            onBlur={handlePasswordChange}
                            type="password"
                            id="form2Example22"
                            placeholder="Password"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="theme-btn btn-fill" type="submit">
                            Log in
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={forgotRoute}
                            style={{
                              fontSize: 16,
                            }}
                          >
                            Forgot password?
                          </button>
                        </div>
                      </form>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={registerRoute}
                        >
                          Create an Account
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        We are more than just a blood donation charity
                      </h4>
                      <p className="small mb-0">
                        We help our patients all around the nation to receive
                        the services they need with our great variety of fast
                        reliable blood donation service. We save many lives each
                        day, and we need your help to continue our life-saving
                        work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
