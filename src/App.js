// import logo from './logo.svg';
import "./App.css";

//images
// import faceImg from './images/faces@4x.svg';
// import homeImg1 from './images/illustration-home-PM@4x.webp'
// import homeImg2 from './images/illustration-home-DM@4x.webp'
// import videoImg from './images/video@4x.webp'

// import pipelineImg1 from './images/pipeline-img-1@4x.webp'
// import pipelineImg2 from './images/pipeline-img-2@4x.webp'
// import pipelineLogo from './images/sherlock-pipeline-logo@4x.webp'
// import createImg from './images/Create-img@4x.webp'
// import adaptImg from './images/Adapt-img@4x.webp'
// import manageImg from './images/Desktop-img@4x.webp'

// fonts
import "./fonts/Kollektif-Bold.ttf";
import "./fonts/Kollektif.ttf";
import "./fonts/Kollektif-Italic.ttf";
import "./fonts/Kollektif-BoldItalic.ttf";

//components
// import ManageAnimation from './homePageSections/ManageAnimation';

// import HomeStrengths from './homePageSections/HomeStrengths';
// import VideoContainer from './homePageSections/VideoContainer';
// import PipelineSection from './homePageSections/PipelineSection';
import Header from "./homePageSections/Header";

//pages
import Homepage from "./Pages/Homepage";
import Pipelinepage from "./Pages/Pipelinepage";

//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavigationOptions = [ {
  
  }
]


function App() {
  // toggle click
  // const toggleClick = (id) => {
  //   console.log(id)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          option1="Home"
          option2="About"
          option3="Pipeline"
          option4="Work"
          option5="Services"
          option6="Contact"
        />

        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="pipeline" element={<Pipelinepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
