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
      text: "asset translation.",
      className: "third",
    },
    {
      id: 4,
      text: "creative localization.",
      className: "fourth",
    },
    {
      id: 5,
      text: "product launches.",
      className: "fifth",
    },
    {
      id: 6,
      text: "worldwide ad creation.",
      className: "sixth",
    },
    {
      id:7,
      text: "creative design.",
      className: "seventh"
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
