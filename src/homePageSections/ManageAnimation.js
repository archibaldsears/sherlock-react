import "../css/HomepageSection.scss";

import Faces from "./Faces";
import HomePageAnimatedTextItem from "../components/HomePageAnimatedTextItem";
import { motion } from "framer-motion";

const ManageAnimation = ({ faceImg }) => {


  const items = [
    {
      id: 1,
      text: "project data.",
    },
    {
      id: 2,
      text: "global brand delivery.",
    },
    {
      id: 3,
      text: "translation.",
    },
    {
      id: 4,
      text: "creative localization.",
    },
    {
      id: 5,
      text: "product launches.",
    },
    {
      id: 6,
      text: "worldwide ad creation.",
    },
    {
      id:7,
      text: "creative design.",
    }
  ];

  return (
    <motion.div  className="Main-container">
      <section className="Section-one">
        <motion.h1  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="title-static">
                    We manage your&nbsp;
        </motion.h1>
        <div className="itemContainer">
          {items.map((item) => (
            <HomePageAnimatedTextItem key={item.id} item={item}></HomePageAnimatedTextItem>
          ))}
        </div>
      </section>
      <Faces img={faceImg} />
    </motion.div>
  );
};

export default ManageAnimation;
