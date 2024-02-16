import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Link,useNavigate,useParams} from 'react-router-dom';
import { course } from '../../../Redux/CrudSlice/CrudSlice';
import { Banner } from '../../../Redux/CrudSlice/CrudSlice';
import { Testimonial } from '../../../Redux/CrudSlice/CrudSlice';
 import { useDispatch, useSelector } from "react-redux";
 import { AllBlog } from '../../../Redux/CrudSlice/CrudSlice';
 import { Team } from '../../../Redux/CrudSlice/CrudSlice';
 import { Skeleton } from "@mui/material";


 import { useEffect } from 'react';
function Home() {
    
  const { Courses,TeamMember,bannerdata,testimonials,data,status} = useSelector((state) => state.Crud);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(course());
    dispatch(Team());
    dispatch(Banner());
    dispatch(Testimonial());
    dispatch(AllBlog());
  }, []);
  

console.log("bannerdata",bannerdata)
  return (
    <div>
      




     {/* <!-- Carousel Start --> */}
     <OwlCarousel
            className="owl-carousel owl-theme carousel slide"
            margin={10}
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={4000}
            dots={false}
            data-bs-ride="carousel"
          >
            {bannerdata && bannerdata.map((banner, index) => (
              <div className="carousel-inner item" key={index}>
                <div className="carousel-item active">
                  <img
                    style={{ height: "70vh", width: "100vw" }}
                    src={`https://restapinodejs.onrender.com/api/banner/photo/${banner._id}`}
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div style={{ maxWidth: 900, marginBottom: "350px" }}>
                      {/* <h1 className=" text-uppercase mb-md-3">
                        {banner.title}
                      </h1> */}
                      {/* <span className="display-6 mb-md-4 ">
                        {banner.description}
                      </span> */}
                    </div>
                    <h1 className="m-0" style={{color:'white'}}>
                        {banner.title}
                      </h1>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
 





  {/* Carousel End */}
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt />
        </div>
        <div className="col-lg-7">
          <div className="text-left mb-4">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>About Us</h5>
            <h1>Innovative Way To Learn</h1>
          </div>
          <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
          <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Category Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Subjects Categories</h5>
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


{/* ////////////////////////////////////////  Courses /////////////////////////////////////////////////// */}
      { status==="success"? (Courses && Courses.map((course)=> (

     
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
           
          {/* <Link to={`/course/apply/${course._id}`}>
                              <button type="submit" style={{color:"green"}}  >
                             <b>Apply Now</b>
                              </button>
                            </Link> */}
        </div>
      </div>
    </div>
  </div>
</div>

 ))):(
  ///////////Skeleton///////////////////////////////////
                  <>
            {[...Array(10)].map((_, index) => (
              <div key={index} className="col-md-6 mb-4 pb-2">
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={350} />
              </div>
              ))}
            </>
                
                )}

       
        

       
      </div>
    </div>
  </div>
  {/* Courses End */}
  {/* Registration Start */}
  <div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="mb-4">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Need Any Courses</h5>
            <h1 className="text-white">30% Off For New Students</h1>
          </div>
          <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
            dolor</p>
          <ul className="list-inline text-white m-0">
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
          </ul>
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header bg-light text-center p-4">
              <h1 className="m-0">Sign Up Now</h1>
            </div>
            <div className="card-body rounded-bottom bg-primary p-5">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control border-0 p-4" placeholder="Your name" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 p-4" placeholder="Your email" required="required" />
                </div>
                <div className="form-group">
                  <select className="custom-select border-0 px-4" style={{height: 47}}>
                    <option selected>Select a course</option>
                    <option value={1}>Course 1</option>
                    <option value={2}>Course 1</option>
                    <option value={3}>Course 1</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Registration End */}

{/* Blog Start */}
<div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Our Blog</h5>
        <h1>Latest From Our Blog</h1>
      </div>
      <div className="row pb-3">
      { status==="success" ? (data && data.map((allblog)=>(
        <div className="col-lg-4 mb-4" key={allblog._id}>
          <div className="blog-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/blog/image/${allblog._id}`} alt />
            <a className="blog-overlay text-decoration-none" href>
              <h5 className="text-white mb-3">{allblog.title}</h5>
              <p className="text-primary m-0">Jan 01, 2023</p>
            </a>
          </div>
        </div>
      ))):(
        ///////////Skeleton///////////////////////////////////
                        <>
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="col-md-6 mb-4 pb-2">
                      <Skeleton
                        variant="rectangular"
                        width={300}
                        height={350} />
                    </div>
                    ))}
                  </>
                      
                      )}
       
      </div>
    </div>
  </div>
  {/* Blog End */}


  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Teams</h5>
        <h1>Meet Our Teams</h1>
      </div>
      <div className="row">
      { TeamMember && TeamMember.map((team)=>(
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/team/photo/${team._id}`} alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
            <h5>{team.name}</h5>
            <p className="m-0">{team.possession}</p>
            </div>
          </div>
        </div>
      ))}
        {/* <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5> Cam san</h5>
              <p className="m-0">React js</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5> Julli ann</h5>
              <p className="m-0">Node js</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5> Mark</h5>
              <p className="m-0">Javascript</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}

  <div className="container-fluid py-5">
    <div className="container py-5">
      {/* <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Testimonial</h5>
        <h1>What Say Our Students</h1>
      </div> */}



      {/* <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-5">
      <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Testimonial</h5>
      <h1>What Say Our Students</h1>
    </div>


    
    <div className="row">


    { testimonials && testimonials.map((testimonial)=>(

   

      <div className="col-md-6 col-lg-3 text-center team mb-4"  key={testimonial._id}>
        <div className="team-item rounded overflow-hidden mb-2">
          <div className="team-img position-relative">
            <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/testimonials/photo/${testimonial._id}`} alt />
            <div className="team-social">
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="bg-secondary p-4">
            <h5>{testimonial.name}</h5>
            <b><p className="m-0">{testimonial.position}</p></b>
            <p className="m-0">{testimonial.talk}</p>
          </div>
        </div>
      </div>
 
    ))}
    </div>




  </div>
</div>



    </div>
  </div>


  {/* Testimonial End */}
  
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

export default Home
