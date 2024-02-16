import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Cms/Home/Home";
import Navbar from "./Components/ShareModule/Navbar/Navbar";
import Courses from "./Components/Cms/Courses/Courses";
import Teachers from "./Components/Cms/Teachers/Teachers";
import About from "./Components/Cms/About/About";
import Contact from "./Components/Cms/Contact/Contact";
import BlogDetail from "./Components/Cms/Blog/Blog Detail/BlogDetail";
import BlogList from "./Components/Cms/Blog/Blog Grid/BlogList";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Services from "./Components/Cms/Services/Services";
import OurTeams from "./Components/Cms/OurTeams/OurTeams";
import Testimonials from "./Components/Cms/Blog/Testimonials/Testimonials";
import ApplyCourses from "./Components/Cms/ApplyCourses/ApplyCourses";

function App() {
  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/teacher",
      Component: <Teachers />,
    },
    {
      path: "/service",
      Component: <Services />,
    },
    {
      path: "/team",
      Component: <OurTeams />,
    },
    {
      path: "/courses",
      Component: <Courses />,
    },
    {
      path: "/blogDetail",
      Component: <BlogDetail />,
    },
    // {
    //   path: "/blog/:id",
    //   Component: <BlogList />,
    // },
    {
      path: "/testimonial",
      Component: <Testimonials />,
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
    {
      path: "/course/apply/:id",
      Component: <ApplyCourses />,
    },
    {
      path: "/blogDetails/:id",
      Component: <BlogList />,
    },
  ];

  function PrivateRoute({ children }) {

    const location = useLocation();
    let fullURL = `${location.pathname}`;
    if (fullURL.startsWith("/")) {
      fullURL = fullURL.substring(1);
    }

    console.log(children, "children");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {alert(`Please go for login either you can't access ${fullURL}`)}
      </>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={route.Component}
              />
            );
          })}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
