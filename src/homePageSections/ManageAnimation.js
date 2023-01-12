import "../css/HomepageSection.scss";

import Faces from "./Faces";
import HomePageAnimatedTextItem from "../components/HomePageAnimatedTextItem";
import { motion } from "framer-motion";

const ManageAnimation = ({ faceImg }) => {


  const items = [
    {
      id: 1,
      text: "project data.",
      className: "first",
    },
    {
      id: 2,
      text: "global brand delivery.",
      className: "second",
    },
    {
      id: 3,
      text: "creative localization.",
      className: "third",
    },
    {
      id: 4,
      text: "product launches.",
      className: "fourth",
    },
    {
      id: 5,
      text: "worldwide ad creation.",
      className: "fifth",
    },
    {
      id: 6,
      text: "creative design.",
      className: "sixth",
    },
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
