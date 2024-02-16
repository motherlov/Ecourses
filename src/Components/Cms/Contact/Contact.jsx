import { TextField, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { Contact } from "../../../Redux/CrudSlice/CrudSlice";
import { contact } from "../../../Redux/CrudSlice/CrudSlice";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const { status } = useSelector((s) => s?.Crud);
  console.log(status, "status");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) => {

    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    // formData.append("message", data.message);

    const postData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    
    // dispatch(Create(formData));
    dispatch(contact(postData));
    navigate("/")
  };
 
  
  

  return (
    <>
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                //  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                src="img/about.jpg"
              
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
              <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Contact Us</h5>

         <h1 style={{color:"green"}}> Contact For Any Query</h1>
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
                  {...register("phone", {
                    required: "phone is required", maxLength: 10
                    
                  })}
                  type="number"
                  label="Enter Your  phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.phone}
                  helperText={errors.phone && errors.phone.message}
                />

<TextField
                  {...register("message", {
                    required: "message is required", 
                    
                  })}
                 
                  label="Enter Your  message"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.message}
                  helperText={errors.message && errors.message.message}
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
                    Send Message
                  </Button>
                )}
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  );
};
export default Contact;

