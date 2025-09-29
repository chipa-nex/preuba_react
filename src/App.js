import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./components/Acerca";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
