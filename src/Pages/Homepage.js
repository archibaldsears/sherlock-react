import faceImg from '../images/faces@4x.svg';
import homeImg1 from '../images/illustration-home-PM@4x.webp'
import homeImg2 from '../images/illustration-home-DM@4x.webp'
import videoImg from '../images/video@4x.webp'

import pipelineImg1 from '../images/pipeline-img-1@4x.webp'
import pipelineImg2 from '../images/pipeline-img-2@4x.webp'
import pipelineLogo from '../images/sherlock-pipeline-logo@4x.webp'
import createImg from '../images/Create-img@4x.webp'
import adaptImg from '../images/Adapt-img@4x.webp'
import manageImg from '../images/Desktop-img@4x.webp'

import ManageAnimation from '../homePageSections/ManageAnimation';
import HomeStrengths from '../homePageSections/HomeStrengths';
import VideoContainer from '../homePageSections/VideoContainer';
import PipelineSection from '../homePageSections/PipelineSection';


const Homepage = () => {
  return (
    <div>

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
  )
    
}

export default Homepage