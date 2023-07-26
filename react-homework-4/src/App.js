import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Post";
import "./App.css";


function App() {
  return (
    <div>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/posts/:postId" element={<Post />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
