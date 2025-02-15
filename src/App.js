import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skils from "./components/Skils/skils";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skils/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
