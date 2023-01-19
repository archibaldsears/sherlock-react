import MainFront from "../materialComponents/pageFronts/MainFront"
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import ImageWithText from "../materialComponents/twoColumns/ImageWithText";
import { motion } from "framer-motion";

const Servicespage = () => {

  const servicesMainFrontContent = {
    id: 1,
    title: "We take your brand global, flawlessly",
    copy: "5 million perfectly-localized asset to date.",
  }

  const servicesContentInfo = [
    {
      id: 1,
      // image: placeholder,
      direction: "textLeft",
      title: "Translation",
      copy: "With experience in translating 300 languages and dialects and access to the world’s most advanced AI and Translation Memory technology, we’re ready for any language.",
      // btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 2,
      // image: placeholder,
      direction: "textRight",
      title: "Multi Endpoint Delivery",
      copy: "We deliver everywhere whether it be to your Digital Asset Management system, your customer or your partners. Our automated delivery process will get your assets to where they need to go with automated file name formatting in just one click.",

    },
    {
    id: 3,
    // image: placeholder,
    direction: "textLeft",
    title: "Localization",
    copy: "As multi-lingual specialists, we can localize your assets to any language and in any size no matter the medium. With pre-programmed art safe zones in Pipeline we can easily verify that you’re artwork is pixel perfect.",
    // btnText: "Call to Action",
    // btnColor: "orange",
    // BtnOnclick: onClick,
    // type: "CTA",
  },
  {
    id: 4,
    // image: placeholder,
    direction: "textRight",
    title: "Storage",
    copy: "Looking for that asset you thought you no longer needed, but do now? Don't panic. No asset is left behind and will still be stored in Pipeline.",
    // btnText: "Call to Action",
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
    content={servicesMainFrontContent}
    ></MainFront>
    
    <MDBContainer>
      {servicesContentInfo.map((content) => (
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

export default Servicespage