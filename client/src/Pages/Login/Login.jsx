import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../Images/loogo.png";
import Axios from "axios";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginApprove = (e) => {
    Axios.post("http://localhost:3001/processLogin", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data[0].email && response.data[0].password) {
        console.log(response);
        e.preventDefault();
        navigate("/approved");
      } else {
        console.log("Can't login");
        handleOpen();

      }
    });
  };


  const registerRoute = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const forgotRoute = (e) => {
    e.preventDefault();
    navigate("/forgot");
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

                      <form /*onSubmit={loginApprove}*/ >
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control"
                            onBlur={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="Email Address"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control"
                            onBlur={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <button
                             onClick={loginApprove} type="button" className="theme-btn btn-fill"
                          >
                            Log in
                          </button>
                          <Modal
                          open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <Box sx={style}>
                                <h2>
                                  <u>Access Denied</u>
                                </h2>
                                <p>
                                  {" "}
                                  Wrong email or password combination. {" "}
                                  {" "}Please try again or click on forgot password.{" "}
                                </p>
                              </Box>
                            </Fade>
                          </Modal>
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
