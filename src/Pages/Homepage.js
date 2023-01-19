import faceImg from "../images/faces@4x.svg";
import homeImg1 from "../images/illustration-home-PM@4x.webp";
import homeImg2 from "../images/illustration-home-DM@4x.webp";
import videoImg from "../images/video@4x.webp";

import pipelineImg1 from "../images/pipeline-img-1@4x.webp";
import pipelineImg2 from "../images/pipeline-img-2@4x.webp";
import pipelineLogo from "../images/sherlock-pipeline-logo@4x.webp";
import createImg from "../images/Create-img@4x.webp";
import adaptImg from "../images/Adapt-img@4x.webp";
import manageImg from "../images/Desktop-img@4x.webp";

import mandoBg from "../images/mando-bg@4x.png";
import mandoBgNoTT from "../images/mando-bg-noTT@4x.png";
import mandolanguage1 from "../images/mandolanguage1@4x.png";
import mandolanguage2 from "../images/mandolanguage2@4x.png";

import ManageAnimation from "../homePageSections/ManageAnimation";
// import HomeStrengths from "../homePageSections/HomeStrengths";
import VideoContainer from "../homePageSections/VideoContainer";
import PipelineSection from "../homePageSections/PipelineSection";

import { motion} from 'framer-motion'
import "../css/HomepageSection.scss";
import "../css/AppHeader.scss";

import HomePageThreeCards from "../homePageSections/HomePageThreeCards";

const Homepage = () => {
  const onClick = () => {
    console.log("clicked");
  };

  const cardText = [
    {
      id: 1,
      image: homeImg1,
      title: "Project Management",
      copy: "From business insights to project tracking to translation management, every project provides a massive amount of data that’s a critical part of getting what you need built quickly. Our focus on managing your data means we’re constantly improving, while providing you with customized, actionable insights on-demand.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
    {
      id: 2,
      image: homeImg2,
      title: "Data Management",
      copy: "Brief creation. Proof of concepts. Quote and budget approval. Design and localization management. Fast, simplified delivery. Your dedicated team works with you to build a workflow based on your needs, and can take a lot of tasks off your plate. We even help manage other vendors.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
    {
      id: 3,
      image: homeImg1,
      title: "Global Support",
      copy: "Your work is global, and so is our team. We’re all over the world and are proud to offer round-the-clock support from our dedicated teams with seamless handover. So you can launch a project from Tokyo and get it delivered from London. No turbulence or delays.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
  ];

  return (
    <motion.div
      initial={{ x: -(window.innerWidth / 5), opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      exit={{ x: window.innerWidth / 5, opacity: 0 }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <ManageAnimation faceImg={faceImg} title="We manage your" />

      <HomePageThreeCards cards={cardText}></HomePageThreeCards>

      <VideoContainer videoImg={videoImg} />

      <PipelineSection
        pipelineImg1={pipelineImg1}
        pipelineImg2={pipelineImg2}
        pipelineLogo={pipelineLogo}
        createImg={createImg}
        createImg2={mandoBg}
        createImg3={mandolanguage1}
        createImg4={mandolanguage2}
        mandoBgNoTT={mandoBgNoTT}
        adaptImg={adaptImg}
        manageImg={manageImg}
      />
    </motion.div>
  );
};

export default Homepage;
