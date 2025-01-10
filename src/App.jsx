import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <About />
          <Contact />
          <Footer />
        </>
      } />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </Router>
);

export default App;
