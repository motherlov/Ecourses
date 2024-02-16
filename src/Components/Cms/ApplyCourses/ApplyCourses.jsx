import React from 'react'
import { TextField, Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
// import { CourseApplyId } from '../../../Redux/CrudSlice/CrudSlice';
import { course } from '../../../Redux/CrudSlice/CrudSlice';
import { CourseApply } from '../../../Redux/CrudSlice/CrudSlice';
import { useDispatch, useSelector } from "react-redux";
 import { Link,useNavigate,useParams} from 'react-router-dom';
 import { useEffect } from 'react';
 import { toast } from "react-toastify";
function ApplyCourses() {

  // const { Courses} = useSelector((state) => state.Crud);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();

  const { status } = useSelector((s) => s?.Crud);
  console.log(status, "status");
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      address: data.address,
      qualification: data.qualification,
      programing_knowledge: data.programing_knowledge,
      experiance: data.experiance,
    };
    
    dispatch(CourseApply({postData,id}));
    navigate("/courses");
  };


//  useEffect(() => {
//     dispatch(course());
//    }, [id, dispatch]);


  // useEffect(() => {
  //   dispatch(CourseApplyId(id));
  // }, [id, dispatch]);
  



  return (
    <>
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                // src="https://th.bing.com/th?id=OIP.IXPuo_u48zwhJkrcBru-_wHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
              <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}> Apply Courses</h5>

         <h1 style={{color:"green"}}>Courses For Admission</h1>
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
                  {...register("city", {
                    required: "city is required",
                    
                  })}
                  label="Enter Your  city"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.city}
                  helperText={errors.city && errors.city.message}
                />
                
      <TextField
                  {...register("address", {
                    required: "address is required",
                    
                  })}
                  label="Enter Your  address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.address}
                  helperText={errors.address && errors.address.message}
                />

               <TextField
                  {...register("qualification", {
                    required: "qualification is required",
                    
                  })}
                  label="Enter Your  qualification"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.qualification}
                  helperText={errors.qualification && errors.qualification.message}
                />

                 <TextField
                  {...register("programing_knowledge", {
                    required: "programing_knowledge is required",
                    
                  })}
                  label="Enter Your  programing_knowledge"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.programing_knowledge}
                  helperText={errors.programing_knowledge && errors.programing_knowledge.message}
                />

             <TextField
                  {...register("experiance", {
                    required: "experiance is required",
                    
                  })}
                  label="Enter Your  experiance"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.experiance}
                  helperText={errors.experiance && errors.experiance.message}
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
                    Submit Courses 
                  </Button>
                )}
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  )
}

export default ApplyCourses
