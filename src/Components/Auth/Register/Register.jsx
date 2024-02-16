import { TextField, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../Redux/AuthSlice/AuthSlice";
import { useForm } from "react-hook-form";

const Register = () => {
  const {redirect} = useSelector((state)=>state.Auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [password, setPassword] = useState(false);
  const { status } = useSelector((s) => s?.Auth);
  console.log(status, "status");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("mobile", data.mobile);
    
    dispatch(signup(formData));
  };
  const passwordShowing = () => {
    setPassword(!password);
  };
  const [loading, setLoading] = useState(false);
  
  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";

    if (name !== null && name !== undefined && name !== "") {
        // window.location.pathname = getPathname;
        isInLoginPage && navigate("/login");
    }
};
useEffect(()=>{
  RedirectUser()
},[redirect])

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
         <h1 style={{color:"green"}}>Registration Form</h1>
              <TextField
                  {...register("name", {
                    required: "name is required",
                    
                  })}
                  label="Enter Your  Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.name}
                  helperText={errors.name && errors.name.message}
                />

              
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

                <TextField
                  {...register("mobile", {
                    required: "mobile is required", maxLength: 10
                    
                  })}
                  type="number"
                  label="Enter Your  mobile"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.mobile}
                  helperText={errors.mobile && errors.mobile.message}
                />


               

                  

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
                    sign up
                  </Button>
                )}
              </form>
              <Link to="/login"><p>Already have an account?<u>signin</u></p></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  );
};
export default Register;

