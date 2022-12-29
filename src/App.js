// import logo from './logo.svg';
import "./App.css";

// fonts
import "./fonts/Kollektif-Bold.ttf";
import "./fonts/Kollektif.ttf";
import "./fonts/Kollektif-Italic.ttf";
import "./fonts/Kollektif-BoldItalic.ttf";


//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";


//components
import Header from "./homePageSections/Header";

//pages
import Homepage from "./Pages/Homepage";
import Pipelinepage from "./Pages/Pipelinepage";
import Aboutpage from "./Pages/Aboutpage";


const NavigationOptions = {
  nav1: "Home",
  nav2: "About",
  nav3: "Pipeline",
  nav4: "Work",
  nav5: "Services",
  nav6: "Contact",
};

function App() {
  // toggle click
  // const toggleClick = (id) => {
  //   console.log(id)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          navOptions={NavigationOptions}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pipeline" element={<Pipelinepage />} />
          <Route path="about" element={<Aboutpage />} />


          {/* for github pages */}
          <Route path="/sherlock-react" element={<Homepage />} />
          <Route path="/*" element={<Homepage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
