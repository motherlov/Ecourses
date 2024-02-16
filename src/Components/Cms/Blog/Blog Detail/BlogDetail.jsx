import React from "react";
import { AllBlog } from "../../../../Redux/CrudSlice/CrudSlice";
import { getRecentPosts } from "../../../../Redux/CrudSlice/CrudSlice";
import { Category } from "../../../../Redux/CrudSlice/CrudSlice";
import { blogSearch } from "../../../../Redux/CrudSlice/CrudSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogDetail() {
  const { data, searchResults, categoryData, recentPosts } = useSelector(
    (state) => state.Crud
  );
  const [searchItem, setSearchItem] = useState("");
console.log(data,"searchItem")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllBlog());
    dispatch(getRecentPosts());
    dispatch(Category());
  }, []);

  // useEffect(() => {
  //   if (searchItem) {
  //     dispatch(blogSearch(searchItem));
  //   }
  // }, [searchItem]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(blogSearch(searchItem)); 
  
    // Assuming you have an action to perform the search
  };
  console.log("searchResults", searchResults);

  return (
    <div>
      {/* <!-- Header Start --> */}
      <div className="container-fluid page-header" style={{ marginBottom: 90 }}>
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h3 className="display-4 text-white text-uppercase">Blog Detail</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href>
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Blog Detail</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Blog Start */}

      {/* /////////////////////////////////////////search///////////////////////// */}
      <div className="mb-5">
                <form action>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Keyword"
                      value={searchItem}
                      onChange={(e) => setSearchItem(e.target.value)}
                    />
                    <div className="input-group-append">
                      {/* <span className="input-group-text bg-transparent text-primary"><i className="fa fa-search" /></span> */}
                      <button
                        className="btn btn-secondary px-4 px-lg-5"
                       onClick={handleSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="row pb-3">

  {/* //////////////////////////////////search value in allblog //////////////// */}

  {/* The Array.isArray() static method determines whether the passed value is an Array. */}
                {Array.isArray(data) &&     
                  data.map((allblog) => (
                    
                      <div className="col-lg-6 mb-4" key={allblog._id}>
                        <div className="blog-item position-relative overflow-hidden rounded mb-2">
                          {/* <h1 className="mb-5"></h1> */}
                          <img
                            className="img-fluid"
                            src={`https://restapinodejs.onrender.com/api/blog/image/${allblog._id}`}
                            alt
                          />
                          <a className="blog-overlay text-decoration-none" href>
                            <h5 className="text-white mb-3">{allblog.title}</h5>
                            <p className="text-primary m-0">Jan 01, 2023</p>
         <Link to={`/blogDetails/${allblog._id}`}  className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" > Read More</Link>
                            {/* <h5 className="text-white mb-3">{allblog.postText}</h5> */}
                          </a>
                         
                        </div>
                      </div>
                   
         
                  ))}

                {/* <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/blog-2.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div> */}

                <div className="col-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg justify-content-center mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              {/* Author Bio */}
              <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                <img
                  src="img/user.jpg"
                  className="img-fluid rounded-circle mx-auto mb-3"
                  style={{ width: 100 }}
                />
                <h3 className="text-primary mb-3">John Doe</h3>
                <h3
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Tag Cloud
                </h3>
                <p className="text-white m-0">
                  Conset elitr erat vero dolor ipsum et diam, eos dolor lorem,
                  ipsum sit no ut est ipsum erat kasd amet elitr
                </p>
              </div>

              {/*///////// Search Form ///////////////////////////////*/}

        

              {/* Category List */}
              <div className="mb-5">
                <h3
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Categories
                </h3>
                {categoryData &&
                  categoryData.map((category) => (
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <a href className="text-decoration-none h6 m-0">
                          {category.category}
                        </a>
                        <span className="badge badge-primary badge-pill">
                          150
                        </span>
                      </li>
                    </ul>
                  ))}
              </div>

              {/* Recent Post */}
              <div className="mb-5">
                <h3
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Recent Post
                </h3>
                {recentPosts &&
                  recentPosts.map((recentPost) => (
                    <a
                      className="d-flex align-items-center text-decoration-none mb-3"
                      href
                    >
                      <img
                        className="img-fluid rounded"
                        src="img/blog-80x80.jpg"
                        alt
                      />
                      <div className="pl-3">
                        <h6 className="m-1">{recentPost.title}</h6>
                        <small>Jan 01, 2023</small>
                      </div>
                    </a>
                  ))}
                {/* <a className="d-flex align-items-center text-decoration-none mb-3" href>
            //   <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt />
            //   <div className="pl-3">
            //     <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
            //     <small>Jan 01, 2050</small>
            //   </div>
             </a> */}
                {/* <a className="d-flex align-items-center text-decoration-none mb-3" href>
            //   <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt />
            //   <div className="pl-3">
            //     <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
            //     <small>Jan 01, 2050</small>
            //   </div>
             </a> */}
              </div>
              {/* Tag Cloud */}
              <div className="mb-5">
                <h3
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Tag Cloud
                </h3>
                <div className="d-flex flex-wrap m-n1">
                  <a href className="btn btn-outline-primary m-1">
                    Design
                  </a>
                  <a href className="btn btn-outline-primary m-1">
                    Development
                  </a>
                  <a href className="btn btn-outline-primary m-1">
                    Marketing
                  </a>
                  <a href className="btn btn-outline-primary m-1">
                    SEO
                  </a>
                  <a href className="btn btn-outline-primary m-1">
                    Writing
                  </a>
                  <a href className="btn btn-outline-primary m-1">
                    Consulting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Get In Touch
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  123 Street, New York, USA
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-outline-light btn-square" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Our Courses
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Web Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Apps Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Marketing
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Research
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    SEO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              © <a href="#">Domain Name</a>. All Rights Reserved. Designed by{" "}
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
}

export default BlogDetail;
