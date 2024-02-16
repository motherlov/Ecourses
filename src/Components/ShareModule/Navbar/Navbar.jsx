import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/AuthSlice/AuthSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Navbar() {
  
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
   const navigate = useNavigate();


   const location = useLocation();
   const fullURL = `${location.pathname}`;
   console.log(fullURL, "fullURL");

   const submitLogout = () => {
  dispatch(logout());
    navigate("/login");
    toast.success("logout successfully");
   };



  return (
    <>
    {fullURL === "/" ||
    fullURL === "/about" ||
    fullURL === "/teacher" ||
    fullURL === "/contact" ||
    fullURL === "/blog" ||
    fullURL === "/blogDetail" ||
    fullURL === "/courses" ||
    fullURL === "/service" ||
    fullURL === "/team"    ||
    fullURL  === "/testimonial" ? (
      <>
    <div>
      {/* <!-- Topbar Start --> */}
  <div className="container-fluid d-none d-lg-block">
    <div className="row align-items-center py-4 px-xl-5">
      <div className="col-lg-3">
        <a href className="text-decoration-none">
          <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
        </a>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
            <small>123 Street, New Town(sector-v), WB</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-envelope text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
            <small>info@WebSkitters.com</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-phone text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
            <small>+91 8250299259</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: 67, padding: '0 30px'}}>
          <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2" />Subjects</h5>
          <i className="fa fa-angle-down text-primary" />
        </a>
        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 9}}>
          <div className="navbar-nav w-100">
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">Web Design <i className="fa fa-angle-down float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                <a href className="dropdown-item">HTML</a>
                <a href className="dropdown-item">CSS</a>
                <a href className="dropdown-item">jQuery</a>
              </div>
            </div>
            <a href className="nav-item nav-link">Full Stack Developer</a>
            <a href className="nav-item nav-link">Node Js</a>
            <a href className="nav-item nav-link">React Js</a>
            <a href className="nav-item nav-link">Marketing</a>
          
            <a href className="nav-item nav-link">App Design</a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/courses" className="nav-item nav-link">Courses</Link>
              {/* <Link to="/teacher" className="nav-item nav-link">Teachers</Link> */}
              <Link to="/service" className="nav-item nav-link">Services</Link>
              <Link to="/team"className="nav-item nav-link" >Our Team</Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                <div className="dropdown-menu rounded-0 m-0">
                  {/* <Link to="/blog" className="dropdown-item">Blog </Link> */}
                  <Link to="/blogDetail" className="dropdown-item">Blog Detail</Link>
                  
                  <Link to="/testimonial" className="dropdown-item">Testimonials</Link>
                </div>
              </div>
              
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>



            {/* <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/register">signup</Link> */}

             {token ? (
                 <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
                            onClick={() => {
                              submitLogout();
                            }}
                            // style={{ border: "none", background: "none" }}
                          >
                            Logout
                          </button>
                        ) : (
                          <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/register">signup</Link>)}

          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
</>

) : ( 
  <></>
 )}
</>
  );
};

export default Navbar
