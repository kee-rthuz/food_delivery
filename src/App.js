import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './compontes/Contact'; 
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import TestimonialPage from './compontes/testimonial';
import Reservation from './compontes/reservation';
import Services from './compontes/Services';
import MainNavbar from './compontes/MainNavbar';
import Home from './compontes/Home';



function App() {
  return (
    <Router>
      <div>
        <MainNavbar />

        <Navbar />

        <Routes>

            <Route path="/"  element={<Home />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/testimonial"  element={<TestimonialPage />} />
            <Route path="/service"  element={<Services />} />
            <Route path="/booking"  element={<Reservation />} />

        </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;








// import React, {useEffect} from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Contact from './compontes/Contact'; 
// // import Footer from './compontes/Footer';
// import Navbar from './compontes/Navbar';

// import "aos/dist/aos.css";
// import AOS from "aos";




// function App() {

//   useEffect(() => {
//     AOS.init(
//       {
//         offset: 100,
//         duration: 700,
//         easing: "ease-in",
//         delay: 100,
//       }
//     );

//   })

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//             <Route path="/contact"  element={<Contact />} />
//         </Routes>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;
