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
      text: "creative projects.",
    },
    {
      id: 5,
      text: "product launches.",
    },
    {
      id: 6,
      text: "ad creation.",
    },
    {
      id: 7,
      text: "creative design.",
    },
  ];

  const position1 = 0;
  const position2 = 1;
  const position3 = 0.5;
  const position4 = 0.5;
  const position5 = 0.4;
  const position6 = 0.3;
  const position7 = 0;

  let positions = {
    position1: "0rem",
  };

  for (let i = 1; i <= 7; i++) {
    positions[`down${5 * i}`] = `${5 * i}rem`;
    positions[`up${5 * i}`] = `-${5 * i}rem`;
  }

  const keyframes = [
    [
      //position 1
      { y: positions.position1, opacity: position1 },
      { y: positions.down5, opacity: position2 },
      { y: positions.down10, opacity: position3 },
      { y: positions.down15, opacity: position4 },
      { y: positions.down20, opacity: position5 },
      { y: positions.down25, opacity: position6 },
      { y: positions.down30, opacity: position7 },
    ],
    [
      //position 2
      { y: positions.position1, opacity: position2 },
      { y: positions.down5, opacity: position3 },
      { y: positions.down10, opacity: position4 },
      { y: positions.down15, opacity: position5 },
      { y: positions.down20, opacity: position6 },
      { y: positions.down25, opacity: position7 },
      { y: positions.up5, opacity: position1 },
    ],
    [
      //position 3
      { y: positions.position1, opacity: position3 },
      { y: positions.down5, opacity: position4 },
      { y: positions.down10, opacity: position5 },
      { y: positions.down15, opacity: position6 },
      { y: positions.down20, opacity: position7 },
      { y: positions.up10, opacity: position1 },
      { y: positions.up5, opacity: position2 },
    ],
    [
      { y: positions.position1, opacity: position4 },
      { y: positions.down5, opacity: position5 },
      { y: positions.down10, opacity: position6 },
      { y: positions.down15, opacity: position7 },
      { y: positions.up15, opacity: position1 },
      { y: positions.up10, opacity: position2 },
      { y: positions.up5, opacity: position3 },
    ],
    [
      { y: positions.position1, opacity: position5 },
      { y: positions.down5, opacity: position6 },
      { y: positions.down10, opacity: position7 },
      { y: positions.up20, opacity: position1 },
      { y: positions.up15, opacity: position2 },
      { y: positions.up10, opacity: position3 },
      { y: positions.up5, opacity: position4 },
    ],
    [
      { y: positions.position1, opacity: position6 },
      { y: positions.down5, opacity: position7 },
      { y: positions.up25, opacity: position1 },
      { y: positions.up20, opacity: position2 },
      { y: positions.up15, opacity: position3 },
      { y: positions.up10, opacity: position4 },
      { y: positions.up5, opacity: position5 },
    ],
    [
      { y: positions.position1, opacity: position7 },
      { y: positions.up30, opacity: position1 },
      { y: positions.up25, opacity: position2 },
      { y: positions.up20, opacity: position3 },
      { y: positions.up15, opacity: position4 },
      { y: positions.up10, opacity: position5 },
      { y: positions.up5, opacity: position6 },
    ],
  ];

  const keyframesReverse = [
    [
      //position 1
      //position 2
      { y: positions.down30, opacity: position7 },
      { y: positions.down25, opacity: position6 },
      { y: positions.down20, opacity: position5 },
      { y: positions.down15, opacity: position4 },
      { y: positions.down10, opacity: position3 },
      { y: positions.down5, opacity: position2 },

      { y: positions.position1, opacity: position1 },
    ],
    [
      //position 2
      { y: positions.up5, opacity: position1 },
      { y: positions.down25, opacity: position7 },
      { y: positions.down20, opacity: position6 },
      { y: positions.down15, opacity: position5 },
      { y: positions.down10, opacity: position4 },
      { y: positions.down5, opacity: position3 },

      { y: positions.position1, opacity: position2 },
    ],
    [
      //position 3
      { y: positions.up5, opacity: position2 },
      { y: positions.up10, opacity: position1 },
      { y: positions.down20, opacity: position7 },
      { y: positions.down15, opacity: position6 },
      { y: positions.down10, opacity: position5 },
      { y: positions.down5, opacity: position4 },

      { y: positions.position1, opacity: position3 },
    ],
    [
      { y: positions.up5, opacity: position3 },
      { y: positions.up10, opacity: position2 },
      { y: positions.up15, opacity: position1 },
      { y: positions.down15, opacity: position7 },
      { y: positions.down10, opacity: position6 },
      { y: positions.down5, opacity: position5 },

      { y: positions.position1, opacity: position4 },
    ],
    [
      { y: positions.up5, opacity: position4 },
      { y: positions.up10, opacity: position3 },
      { y: positions.up15, opacity: position2 },
      { y: positions.up20, opacity: position1 },
      { y: positions.down10, opacity: position7 },
      { y: positions.down5, opacity: position6 },

      { y: positions.position1, opacity: position5 },
    ],
    [
      { y: positions.up5, opacity: position5 },
      { y: positions.up10, opacity: position4 },
      { y: positions.up15, opacity: position3 },
      { y: positions.up20, opacity: position2 },
      { y: positions.up25, opacity: position1 },
      { y: positions.down5, opacity: position7 },

      { y: positions.position1, opacity: position6 },
    ],
    [
      { y: positions.up5, opacity: position6 },
      { y: positions.up10, opacity: position5 },
      { y: positions.up15, opacity: position4 },
      { y: positions.up20, opacity: position3 },
      { y: positions.up25, opacity: position2 },
      { y: positions.up30, opacity: position1 },

      { y: positions.position1, opacity: position7 },
    ],
  ];

  return (
    <motion.div className="Main-container container">
      <section className="Section-one row">
        <motion.h1
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          className="title-static col-6 p-0"
        >
          We manage your&nbsp;
        </motion.h1>
        <div className="itemContainer col-6 p-0">
          {items.map((item) => (
            <HomePageAnimatedTextItem
              key={item.id}
              item={item}
              keyframes={keyframesReverse}
            ></HomePageAnimatedTextItem>
          ))}
        </div>
      </section>
      <Faces img={faceImg} />
    </motion.div>
  );
};

export default ManageAnimation;
