import "../css/AboutPage.scss";
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import ImageWithText from "../materialComponents/twoColumns/ImageWithText";
import MainFront from "../materialComponents/pageFronts/MainFront";
import {AnimatePresence, easeInOut, motion} from 'framer-motion'
import MovingShapes from "../materialComponents/pageFronts/MovingShapes";
const Aboutpage = () => {

  const aboutMainFrontContent = {
    id: 1,
    title: "Your dedicated Sherlock team",
    copy: "Your work is global, and so is our team. With more than 150 creative specialists from Tokyo to London and everywhere in between, we're on-call around the clock to make sure your project gets a smooth handover, or pick up that last-minute order you just found was due yesterday. No problem. No delays.",
    btnText: "Call to Action",
    textFirst: true
  }

  const aboutContentInfo = [
    {
      id: 1,
      // image: placeholder,
      direction: "textLeft",
      title: "Your dedicated Sherlock team",
      copy: "Your work is global, and so is our team. With more than 150 creative specialists from Tokyo to London and everywhere in between, we're on-call around the clock to make sure your project gets a smooth handover, or pick up that last-minute order you just found was due yesterday. No problem. No delays.",
      btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 2,
      // image: placeholder,
      direction: "textRight",
      title: "We're worldwide. (And some of us just like working late!)",
      copy: "11 major cities, 24/7 global coverage, 150+ creative localization specialists, 300+ languages and dialects, 15,000+ translation experts at hand, 100,000+ perfectly-localized assets per month, 5,000,000+ assets total (and counting!) LA, Phoenix, Houston, NY, Jacksonville, Sao Paolo, London, Paris, Belgrade, Cairo, Tokyo, Sydney",
      btnText: "Call to Action",
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

    <MovingShapes></MovingShapes>
    <MDBContainer fluid>
    <MainFront
    content={aboutMainFrontContent}
    ></MainFront>
    
    <MDBContainer>
      {aboutContentInfo.map((content) => (
        <ImageWithText key={content.id}
          image={content.image}
          direction={content.direction}
          title={content.title}
          copy={content.copy}
          btnText={"click me"}
        ></ImageWithText>
      ))}
    </MDBContainer>
    </MDBContainer>
    </motion.div>
  );
};

export default Aboutpage;
