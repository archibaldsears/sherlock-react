import React from "react";
import Homepage from "../Pages/Homepage";
import Pipelinepage from "../Pages/Pipelinepage";
import Aboutpage from "../Pages/Aboutpage";
import Workpage from "../Pages/Workpage";
import Servicespage from "../Pages/Servicespage";
import Contactpage from "../Pages/Contactpage";
import {  Routes, Route, useLocation }  from "react-router-dom";

import {AnimatePresence} from 'framer-motion'


const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage />} />
      <Route path="pipeline" element={<Pipelinepage />} />
      <Route path="about" element={<Aboutpage />} />
      <Route path="work" element={<Workpage />} />
      <Route path="services" element={<Servicespage />} />
      <Route path="contact" element={<Contactpage />} />
      {/* for github pages */}
      <Route path="/sherlock-react" element={<Homepage />} />
      <Route path="/*" element={<Homepage />} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
