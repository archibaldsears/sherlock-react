import React, { useEffect, useState } from "react";
import { motion, useCycle, useAnimationControls } from "framer-motion";
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
    }, 3200);
    return () => clearInterval(interval);
  }, [animating, Animation, cycle, keyframes]);

  return (
    <motion.h1
      animate={animation}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      // onMouseEnter={animatingFunction}
      className="item"
    >
      <Link to="/work">
        <motion.button>
          {item.text}

          {/* {animating ? "clicked" : "stop"} */}
        </motion.button>
      </Link>
    </motion.h1>
  );
}

const HomePageAnimatedTextItem = ({ item, keyframes }) => {
  const [animating, setAnimating] = useState(true);

  const stopStartAnimation = () => {
    setAnimating(false);
  }

  return (
    <HomepageMotionItem
      keyframes={keyframes}
      item={item}
      animatingFunction={stopStartAnimation}
      animating={animating}
    ></HomepageMotionItem>
  );
};

export default HomePageAnimatedTextItem;
