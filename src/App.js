import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProgrammingMain from "./components/Courses/Programming/ProgrammingMain";
import CourseMain from "./components/SingleCourse/CourseMain";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses/Programming/" element={<ProgrammingMain />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route
          path="/Courses/Programming/Web-development"
          element={<CourseMain />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
