import React, { useEffect, useState } from "react";
import {
  motion,
  useCycle,
  useAnimationControls,
} from "framer-motion";
import { Link } from "react-router-dom";

function HomepageMotionItem({ keyframes, item, animating, animatingFunction }) {
  const [animation, cycle] = useCycle(...keyframes[item.id - 1]);
  const Animation = useAnimationControls();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (animating) {
        cycle();
        Animation.start({
          y: keyframes[i],
        });
        
      } else {
        Animation.stop({ y: Animation.get() });
      }
      i++;
      if (i === 7) {
        i = 0;
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [animating, Animation, cycle, keyframes]);


  return (
    <motion.h1
      animate={animation}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1}}
      
      className="item"
    >
      <Link to="/work">
      <motion.button 
        
      >
      
        {item.text}
        
        {/* {animating ? "clicked" : "stop"} */}
      
      </motion.button>
      </Link>
    </motion.h1>
  );
}

const HomePageAnimatedTextItem = ({ item }) => {
  const [animating, setAnimating] = useState(true);

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

  return (
    <HomepageMotionItem
      keyframes={keyframes}
      item={item}
      animatingFunction={() => setAnimating(!animating)}
      animating={animating}
    ></HomepageMotionItem>
  );
};

export default HomePageAnimatedTextItem;
