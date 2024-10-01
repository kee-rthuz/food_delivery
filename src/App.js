//  offers page show navbar code
// ------------------------------


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Contact from './compontes/Contact';
// import Footer from './compontes/Footer';
// import Navbar from './compontes/Navbar';
// import TestimonialPage from './compontes/testimonial';
// import FoodOrder from './compontes/Order';
// import Services from './compontes/Services';
// import MainNavbar from './compontes/MainNavbar';
// import Home from './compontes/Home';
// import Menu from './compontes/Menu';
// import OurTeam from './compontes/OurTeam';
// import SignupPage from './compontes/auth/signup/page';
// import LoginPage from './compontes/auth/login/page';
// import About from './compontes/about';
// import DineIn from './compontes/DineIn';
// import { useNavbarVisibility } from './hooks/useNavbarVisibility';
// import AddRestaurant from './compontes/AddRestaurant'
// import Offers from './compontes/Offers'

// import OrderOnline from './compontes/OrderOnline'

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation();
//   const showNavbar = useNavbarVisibility();
//   const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

//   return (
//     <div>
//       {!isAuthPage && showNavbar && <MainNavbar />}
//       {!isAuthPage && showNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/testimonial" element={<TestimonialPage />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/order" element={<FoodOrder />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/our-team" element={<OurTeam />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dine-in" element={<DineIn />} />
//         <Route path="/orders-online" element={<OrderOnline />} />
//         <Route path="/add-restaurant" element={<AddRestaurant />} />
//         <Route path="/offers" element={<Offers />} />



//       </Routes>
//       {!isAuthPage && showNavbar && <Footer />}
//     </div>
//   );
// }

// export default App;





//  offers page not show navbar code
// ------------------------------

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './compontes/Contact';
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import TestimonialPage from './compontes/testimonial';
import FoodOrder from './compontes/Order';
import Services from './compontes/Services';
import MainNavbar from './compontes/MainNavbar';
import Home from './compontes/Home';
import Menu from './compontes/Menu';
import OurTeam from './compontes/OurTeam';
import SignupPage from './compontes/auth/signup/page';
import LoginPage from './compontes/auth/login/page';
import About from './compontes/about';
import DineIn from './compontes/DineIn';
import { useNavbarVisibility } from './hooks/useNavbarVisibility';
import AddRestaurant from './compontes/AddRestaurant'
import Offers from './compontes/Offers'

import OrderOnline from './compontes/OrderOnline'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = useNavbarVisibility();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOffersPage = location.pathname === '/offers'; // Add this line

  return (
    <div>
      {!isAuthPage && !isOffersPage && showNavbar && <MainNavbar />}
      {!isAuthPage && !isOffersPage && showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/order" element={<FoodOrder />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dine-in" element={<DineIn />} />
        <Route path="/orders-online" element={<OrderOnline />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      {!isAuthPage && !isOffersPage && showNavbar && <Footer />}
    </div>
  );
}

export default App;