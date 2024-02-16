import React from 'react'
import { Testimonial } from '../../../Redux/CrudSlice/CrudSlice'

import { useDispatch, useSelector } from "react-redux";
 import { Link} from 'react-router-dom';
 import { useEffect } from 'react';
 import { toast } from "react-toastify";
function About() {
  const { testimonials} = useSelector((state) => state.Crud);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Testimonial());
  }, []);
  return (
   
  <div>
  {/* <!-- Header Start --> */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
    <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
        <h3 className="display-4 text-white text-uppercase">About</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">About</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
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
  {/* Testimonial Start */}
  {/* <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Testimonial</h5>
        <h1>What Say Our Students</h1>
      </div>
      <div className="row justify-content-center">
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
      </div>
    </div>
  </div> */}
  <div className="container-fluid py-5">


  <div className="container pt-5 pb-3">
    <div className="text-center mb-5">
      <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Testimonial</h5>
      <h1>Meet Our  Students</h1>
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
</div></div>

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

export default About
 