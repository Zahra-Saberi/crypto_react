import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";


function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent></NavbarComponent>

      {/* Wrapper */}
      <div className="wrapper">
        <h2>Wrapper</h2>
      </div>
      

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
