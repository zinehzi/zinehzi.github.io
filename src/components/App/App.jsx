import { useState, useEffect } from "react";
import "./App.scss";
import Layout from "../Layout/Layout";
import Homepage from "../Homepage/Homepage";
import About from "../About/About";
import MyStory from "../MyStory/MyStory";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import ContactMessage from "../ContactMessage/ContactMessage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loader from "../Loader/Loader";

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return !Loading ? (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Navigate replace to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/my-story" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/contact/message" element={<ContactMessage />} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
