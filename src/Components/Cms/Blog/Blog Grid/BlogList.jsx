import React from 'react'
import { TextField, Button, IconButton } from "@mui/material";
import  {  useState } from "react";
import { CommentCreate } from '../../../../Redux/CrudSlice/CrudSlice';
 import { Category } from '../../../../Redux/CrudSlice/CrudSlice';
import { AllBlog } from '../../../../Redux/CrudSlice/CrudSlice';
import { getBlogDetail } from '../../../../Redux/CrudSlice/CrudSlice';
//import { LetestPost } from '../../../../Redux/CrudSlice/CrudSlice';
import { getRecentPosts } from '../../../../Redux/CrudSlice/CrudSlice';
import { Comment } from '../../../../Redux/CrudSlice/CrudSlice';
import { useDispatch, useSelector } from "react-redux";
 import { useEffect } from 'react';
 import { useForm } from "react-hook-form";
 import { useParams } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';


function BlogList() {
 const {id} = useParams();
  const {post} = useSelector((state) =>state.Crud);
  const {blogDetails} = useSelector((state) =>state.Crud);
  const {categoryData} = useSelector((state) => state.Crud); // category
  const { recentPosts} = useSelector((state) => state.Crud); // letest-post
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(AllBlog());
    dispatch(getBlogDetail(id));
    dispatch(getRecentPosts());
    dispatch(Category());
  }, []);


  // useEffect(() => {
  //   dispatch(LetestPost());
  // }, []);

  const { status } = useSelector((s) => s?.Crud);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      comment: data.comment,
      // id:id,
    };

    dispatch(CommentCreate({postData,id}));
    navigate("/blogDetail")
  }

  useEffect(() => {
    dispatch(Comment(id));
  }, []);


//  console.log("id",id)
 console.log("post",post);
  // console.log("category",data);
  return (
    
    <div>
     {/* <!-- Header Start --> */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
    <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
        <h3 className="display-4 text-white text-uppercase">Blog</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Blog</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Detail Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">

       
          <div className="mb-5">
            <h6 className="text-primary mb-3">Jan 01, 2023</h6>
            <h1 className="mb-5">{blogDetails.title}</h1>
            <img className="img-fluid rounded w-100 mb-4" src={`https://restapinodejs.onrender.com/api/blog/image/${id}`} alt="Image" />
            <p>


              {/* ///////////////////////    dangerouslySetInnerHTML    ///////////// */}

              <div dangerouslySetInnerHTML={{ __html: blogDetails?.postText,}} />

              {/* ////////////////////////// end /////////////////////////////////////// */}
                  
                  </p>

          </div>
        



          {/* Comment List */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>3 Comments</h3>
            {post && post.map((data)=>(
            <div className="media mb-4">
             
              <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: 45}} />
              <div className="media-body">
                <h6>{data.name} <small><i>01 Jan 2045 at 12:00pm</i></small></h6>


                <p>{data.comment}</p>
                <button className="btn btn-sm btn-secondary">Reply</button>
              </div>
             
            </div>
            ))}
         

          </div> 




          {/* Comment Form */}
          <div className="bg-secondary rounded p-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Leave a comment</h3>
            <form>
            {/* <h1 style={{color:"green"}}> Login Page</h1> */}

            <TextField
                    {...register("name", {
                      required: "name is required",
                    })}
                    label="Your name"
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
                    {...register("comment", {
                      required: "comment is required",
                    })}
                    label="Your comment"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={errors.comment}
                    helperText={errors.comment && errors.comment.message}
                  />

                  
                  {/* {password? }  */}
                  {/* <Link onClick={passwordShowing}>Show Password</Link> */}
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
                    Send Comment
                    </Button>
                  )}
                </form>
          
          </div>










        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Author Bio */}
          <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
            <img src="/img/user.jpg" className="img-fluid rounded-circle mx-auto mb-3" style={{width: 100}} />
            <h3 className="text-primary mb-3">John Doe</h3>
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Tag Cloud</h3>
            <p className="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
              no ut est ipsum erat kasd amet elitr</p>
          </div>
          {/* Search Form */}
          {/* <div className="mb-5">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary"><i className="fa fa-search" /></span>
                </div>
              </div>
            </form>
          </div> */}





          {/* Category List */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Categories</h3>
            {categoryData && categoryData.map((category)=>(
            <ul className="list-group list-group-flush" key={category._id}>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">{category.category}</a>
                <span className="badge badge-primary badge-pill">150</span>
              </li>
              
            </ul>
            ))}
          </div>












          {/* Recent Post */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Recent Post</h3>
            
             {recentPosts && recentPosts.map((recentPost)=>(
            <a className="d-flex align-items-center text-decoration-none mb-3" href>
              {/* <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: 45}}  /> */}
              <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt />
              <div className="pl-3">
                <h6 className="m-1">{recentPost.title}</h6>
                <small>Jan 01, 2023</small>
              </div>
            </a>
            ))}
            {/* <a className="d-flex align-items-center text-decoration-none mb-3" href>
              <img  src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: 45}}  alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a> */}
            {/* <a className="d-flex align-items-center text-decoration-none mb-3" href>
              <img  src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{width: 45}}  alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a> */}
          </div>
          {/* Tag Cloud */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
              <a href className="btn btn-outline-primary m-1">Design</a>
              <a href className="btn btn-outline-primary m-1">Development</a>
              <a href className="btn btn-outline-primary m-1">Marketing</a>
              <a href className="btn btn-outline-primary m-1">SEO</a>
              <a href className="btn btn-outline-primary m-1">Writing</a>
              <a href className="btn btn-outline-primary m-1">Consulting</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Detail End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: 90}}>
    <div className="row pt-5">
      <div className="col-lg-7 col-md-12">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Get In Touch</h5>
            <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
              <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Our Courses</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Web Design</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Apps Design</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Marketing</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Research</a>
              <a className="text-white" href="#"><i className="fa fa-angle-right mr-2" />SEO</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 mb-5">
        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Newsletter</h5>
        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
        <div className="w-100">
          <div className="input-group">
            <input type="text" className="form-control border-light" style={{padding: 30}} placeholder="Your Email Address" />
            <div className="input-group-append">
              <button className="btn btn-primary px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
    <div className="row">
      <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white">© <a href="#">Domain Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
      <div className="col-lg-6 text-center text-md-right">
        <ul className="nav d-inline-flex">
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">Privacy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>
</div>

  )
}

export default BlogList
