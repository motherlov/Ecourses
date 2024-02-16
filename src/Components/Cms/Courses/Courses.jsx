import React from 'react';
 import { course } from '../../../Redux/CrudSlice/CrudSlice';
 import { useDispatch, useSelector } from "react-redux";
 import { Link} from 'react-router-dom';
 import { useEffect } from 'react';
 import {useNavigate} from "react-router-dom";
 import { toast } from "react-toastify";

function Courses() {
  const { Courses} = useSelector((state) => state.Crud);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  useEffect(() => {
    dispatch(course());
   

  }, []);


 console.log("course", Courses);



  return (
   <div>
   {/* <!-- Header Start --> */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
    <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
        <h3 className="display-4 text-white text-uppercase">Courses</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Courses</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Category Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Subjects</h5>
        <h1>Explore Top Subjects</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-1.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Web Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-2.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Development</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-3.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Game Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-4.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Apps Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-5.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Marketing</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-6.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Research</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-7.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">Content Writing</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-8.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href>
              <h4 className="text-white font-weight-medium">SEO</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Category Start */}
  {/* Courses Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Courses</h5>
        <h1>Our Popular Courses</h1>
      </div>
      <div className="row">

      { Courses && Courses.map((course)=> (

     
        <div className="col-lg-4 col-md-6 mb-4" key={course._id}>
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/course/photo/${course._id}`} alt />
            <div className="bg-secondary p-4">
            <h5 className="m-0">{course.name}</h5>
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />{course.duration}</small>
              </div>
              <a className="h5" href>{course.requirement}</a>
              <div className="border-top mt-4 pt-4">
              {/* <h5 className="m-0">{course.slug}</h5> */}
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">${course.fees}</h5>
                  
                  
                </div>
                <Link to={`/course/apply/${course._id}`} className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block">
                              {/* <button type="submit"   > */}
                             Apply Courses
                              {/* </button> */}
                            </Link>
              </div>
            </div>
          </div>
        </div>
      ))}


        {/* <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="img/course-2.jpg" alt />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href>Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        {/* <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="img/course-3.jpg" alt />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href>Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        {/* <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="img/course-4.jpg" alt />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href>Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/*         
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="img/course-5.jpg" alt />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href>Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="img/course-6.jpg" alt />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href>Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  </div>
  {/* Courses End */}
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

export default Courses
