import React from 'react'
import { useDispatch, useSelector } from "react-redux";
 import { Link} from 'react-router-dom';
 import { useEffect } from 'react';
 import { toast } from "react-toastify";
import { service } from '../../../Redux/CrudSlice/CrudSlice';


function Services() {

    const { Services} = useSelector((state) => state.Crud);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(service());
    }, []);

   console.log("service",Services);

  return (
<div>
     {/* <!-- Header Start --> */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
  <div className="container">
    <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
      <h3 className="display-4 text-white text-uppercase">Services</h3>
      <div className="d-inline-flex text-white">
        <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
        <i className="fa fa-angle-double-right pt-1 px-3" />
        <p className="m-0 text-uppercase">Services</p>
      </div>
    </div>
  </div>
</div>
{/* Header End */}
{/* Team Start */}
<div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-5">
      <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Services</h5>
      <h1>Meet Our Services</h1>
    </div>
    <div className="row">


    { Services && Services.map((service)=>(

   

      <div className="col-md-6 col-lg-3 text-center team mb-4">
        <div className="team-item rounded overflow-hidden mb-2">
          <div className="team-img position-relative">
            <img className="img-fluid" src="img/team-1.jpg" alt />
            <div className="team-social">
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="bg-secondary p-4">
            <h5>{service.name}</h5>
            <p className="m-0">{service.details}</p>
          </div>
        </div>
      </div>
 
    ))}
    </div>
  </div>
</div>
{/* Team End */}
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

export default Services;
