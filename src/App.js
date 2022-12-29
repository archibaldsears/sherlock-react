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
    nav1:'Home',
    nav2:'About',
    nav3:'Pipeline',
    nav4:'Work',
    nav5:'Services',
    nav6:'Contact'
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
          option1={NavigationOptions.nav1}
          option2={NavigationOptions.nav2}
          option3={NavigationOptions.nav1}
          option4={NavigationOptions.nav1}
          option5={NavigationOptions.nav1}
          option6={NavigationOptions.nav1}
        />

        <Routes>
          
          <Route path="pipeline" element={<Pipelinepage />} />

          <Route path="/sherlock-react" element={<Homepage />} />

          <Route path="/*" element={<Homepage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
