// import logo from './logo.svg';
import './App.css';

//images
import faceImg from './images/faces@4x.webp';
import homeImg1 from './images/illustration-home-PM@4x.webp'
import homeImg2 from './images/illustration-home-DM@4x.webp'
import videoImg from './images/video@4x.webp'

import pipelineImg1 from './images/pipeline-img-1@4x.webp'
import pipelineImg2 from './images/pipeline-img-2@4x.webp'
import pipelineLogo from './images/sherlock-pipeline-logo@4x.webp'
import createImg from './images/Create-img@4x.webp'
import adaptImg from './images/Adapt-img@4x.webp'
import manageImg from './images/Desktop-img@4x.webp'

// fonts
import './fonts/Kollektif-Bold.ttf'
import './fonts/Kollektif.ttf'
import './fonts/Kollektif-Italic.ttf'
import './fonts/Kollektif-BoldItalic.ttf'

//components
import ManageAnimation from './homePageSections/ManageAnimation';
import Header from './homePageSections/Header';
import HomeStrengths from './homePageSections/HomeStrengths';
import VideoContainer from './homePageSections/VideoContainer';
import PipelineSection from './homePageSections/PipelineSection';

function App() {
  return (
    <div className="App">

    <Header 
    option1='Home'
    option2='About'
    option3='Pipeline'
    option4='Work'
    option5='Services'
    option6='Contact'
    />
      

    <ManageAnimation 
    faceImg={faceImg}
    title='We manage your'
    />

    <HomeStrengths 
    homeImg1={homeImg1}
    homeImg2={homeImg2}
    homeImg3={homeImg1}
    />

    <VideoContainer
    videoImg={videoImg}
    />

    <PipelineSection 
    pipelineImg1={pipelineImg1}
    pipelineImg2={pipelineImg2}
    pipelineLogo={pipelineLogo}
    createImg={createImg}
    adaptImg={adaptImg}
    manageImg={manageImg}
    />




    </div>
  );
}

export default App;
