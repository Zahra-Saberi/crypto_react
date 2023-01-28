import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import ContactUsPage from "./pages/ContactUs.page";
import AboutUsPage from "./pages/AboutUs.page";


function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent></NavbarComponent>

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
