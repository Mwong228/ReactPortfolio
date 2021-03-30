import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from "./components/Navbar"
// import Contact from "./components/Contact"
// import About from "./components/About"
// import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() { 

  return (
    <>
      <Router> 
        <Navbar />
        {/* <Route exact path={["/","/about"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />  */}
      </Router>
      <Footer />
    </>
  );
}

export default App;
