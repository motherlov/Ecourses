import { TextField, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { login } from "../../../Redux/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { reset_redirectToUpdate } from "../../../Redux/AuthSlice/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import Loader from "../../Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(false);
  const { status } = useSelector((s) => s?.Auth);
  const { redirect } = useSelector((state) => state.Auth);

  const {register,handleSubmit,formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    const UpData = {
      email: data.email,
      password: data.password,
    };
    dispatch(login(UpData));
  };

  const passwordShowing = () => {
    setPassword(!password);
  };

  useEffect(() => {
    dispatch(reset_redirectToUpdate(null));
  }, [dispatch]);

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirect]);

  return (
    <>
      <main id="main">
        <section className="mt-5">
          <div className="container py-4 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
             
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                <h1 style={{color:"green"}}> Login Page</h1>
                  <TextField
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Invalid email format",
                      },
                    })}
                    label="Your Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={errors.email}
                    helperText={errors.email && errors.email.message}
                  />

                  <TextField
                    {...register("password", { required: true })}
                    label="password"
                    type={password ? "text" : "password"}
                    error={!!errors.password}
                    helperText={errors.password && "Password is required"}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />

                  {/* {password? }  */}
                  <Link onClick={passwordShowing}>Show Password</Link>
                  {status === "loading" ? (
                    // Display the loader while loading is in progress
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ marginTop: 2 }}
                    >
                      {/* <Loader /> */}
                    </Button>
                  ) : (
                    // Render the link when not loading
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ marginTop: 2 }}
                    >
                      login
                    </Button>
                  )}
                </form>
                <Link to="/register">Go For Registration</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
