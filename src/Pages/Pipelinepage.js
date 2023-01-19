import {
  MDBContainer,
} from "mdb-react-ui-kit";
import ImageWithText from "../materialComponents/twoColumns/ImageWithText";
import MainFront from "../materialComponents/pageFronts/MainFront";
import { motion } from "framer-motion";
import MovingShapes from "../materialComponents/pageFronts/MovingShapes";
import workFlowsImg from "../images/automatedWorkFlows@4x.png";

const Pipelinepage = () => {
  
  const pipelineMainFrontContent = {
    id: 1,
    title: "Powered by Pipeline",
    copy: "Our software keeps every element of your project together, in one place, while helping us produce and deliver your assets. You can order new projects, manage spend, produce instant adaptations, track your work, and get automated delivery—all from your homepage. It’s your favorite software you’ve never heard of.",
    // btnText: "Call to Action",
    imgFirst: false
  }


  const pipelineContentInfo = [

    {
      id: 2,
      // image: homeImg1,
      direction: "textLeft",
      title: "Multi-vendor management",
      copy: "Large projects are often split up amongst multiple vendors, which can make it hard to keep track of what’s on track. We coordinate vendors for many of our clients, allowing us to standardize workflows and deliveries, and provide one single source of truth for project tracking.",
      // btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 3,
      image: workFlowsImg,
      direction: "textRight",
      title: "Automated Work, Flows",
      copy: "A lot of software makes promises about automation that it just can’t keep. We automate only what matters, and find opportunities for Pipeline to help make our teams’ - and your - lives easier. The rest is powered by your dedicated team of project experts, so you always have a human to talk to.",
      // btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 4,
      // image: homeImg1,
      direction: "textLeft",
      title: "Keep your assets safe",
      copy: "Protect your assets at every point with our top-level security measures, including sensitive pre-launch windows. We've got a single tenant, cloud-based tech stack with 2FA, remote VPN, anti-virus software, regular penetration and assessment tests - all the features your Head of IT and Security needs to hear.",
      // btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 5,
      // image: homeImg1,
      direction: "textRight",
      title: "Try it yourself",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tortor id neque finibus ultricies a eget magna. Vestibulum fermentum, urna a efficitur tristique, dolor metus pulvinar lectus, quis commodo ante arcu non urna. Nunc sed mauris vitae ante dictum auctor. Sed enim",
      btnText: "Launch demo",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
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
   <MainFront
    content={pipelineMainFrontContent}></MainFront>
    <MovingShapes></MovingShapes>
   
    <MDBContainer>
    {pipelineContentInfo.map((content) => (
      <ImageWithText key={content.id}
        image={content.image}
        direction={content.direction}
        title={content.title}
        copy={content.copy}
        btnText={content.btnText}
      ></ImageWithText>
    ))}
  </MDBContainer>
  </motion.div>
  )
}

export default Pipelinepage