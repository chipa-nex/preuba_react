import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouth from "./components/Abouth";
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
            <Route path="/acerca" element={<Abouth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
