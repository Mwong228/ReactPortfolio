import { useState } from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Footer from "./components/Footer"
// import PageAbout from "./components/PageAbout"
// import PageDiscover from "./components/PageDiscover"
// import PageSearch from "./components/PageSearch"

// function Header(){
//   return (
//     <div>Pupster
//       <NavLink to="/about">About</NavLink> | 
//       <NavLink to="/discover">Discover</NavLink> | 
//       <NavLink to="/search">Search</NavLink>
//     </div>
//   )
// }

function App() { 


  // html
  return (
    <>
      <Router> 
        Hello 
        {/* <Header />
        <Route exact path={["/","/about"]} component={PageAbout} />
        <Route exact path="/discover" component={PageDiscover} />
        <Route exact path="/search" component={PageSearch} /> */}
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
