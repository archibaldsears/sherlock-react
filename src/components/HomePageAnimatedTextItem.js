import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomepageMotionItem(props) {
  return (
    <motion.h1
      
      animate={{
        y: props.optionMovement,
        // opacity: props.opacityItem,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: [1, 0.2, 0.7, 0.95]
      }}
      whileHover={{}}
      className={"item " + props.item.className}
    >
      <Link to="/work">
        <motion.button
      animate={{
        opacity: props.opacityItem,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: [0.1, 0.1,0.1, 0.1]
      }}
        >
          {props.item.text}
        </motion.button>
      </Link>
    </motion.h1>
  );
}

const HomePageAnimatedTextItem = ({ item }) => {
  const opacity0 = 0;
  const opacity1 = 0.3;
  const opacity2 = 1;
  const opacity3 = 0.5;
  const opacity4 = 0.4;
  const opacity5 = 0.3;
  const opacity6 = 0.2;


  let positions = {
    position1: "0rem",
  };

  for (let i = 1; i <= 7; i++) {
    positions[`down${5 * i}`] = `${5 * i}rem`;
    positions[`up${5 * i}`] = `-${5 * i}rem`;
  }


  let option1Movement = [
    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,

    positions.down10,
    positions.down10,

    positions.down15,
    positions.down15,

    positions.down20,
    positions.down20,

    positions.down25,
    positions.down25,

    positions.down30,
    positions.down30,

    positions.position1,
  ];



  let option2Movement = [
    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,

    positions.down10,
    positions.down10,

    positions.down15,
    positions.down15,

    positions.down20,
    positions.down20,

    positions.down25,
    positions.down25,


    positions.up5,
    positions.up5,

    positions.position1,
    
  ];
  let option3Movement = [
    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,

    positions.down10,
    positions.down10,

    positions.down15,
    positions.down15,


    positions.down20,
    positions.down20,

    positions.up10,
    positions.up10,

    positions.up5,
    positions.up5,

    positions.position1,
  ];
  let option4Movement = [
    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,




    positions.down10,
    positions.down10,

    positions.down15,
    positions.down15,


    positions.up15,
    positions.up15,

    positions.up10,
    positions.up10,

    positions.up5,
    positions.up5,

    positions.position1,
  ];
  let option5Movement = [


    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,
    
    positions.down10,
    positions.down10,
 
    positions.up20,
    positions.up20,

    positions.up15,
    positions.up15,

    positions.up10,
    positions.up10,

    positions.up5,
    positions.up5,

    positions.position1,
    
  ];
  let option6Movement = [


    positions.position1,
    positions.position1,

    positions.down5,
    positions.down5,


    positions.up25,
    positions.up25,

    positions.up20,
    positions.up20,

    positions.up15,
    positions.up15,

    positions.up10,
    positions.up10,

    positions.up5,
    positions.up5,


    positions.position1,
  ];
  let option7Movement = [
    positions.position1,
    positions.position1,

    positions.up30,
    positions.up30,

    positions.up25,
    positions.up25,

    positions.up20,
    positions.up20,

    positions.up15,
    positions.up15,

    positions.up10,
    positions.up10,

    positions.up5,
    positions.up5,


    positions.position1,
  ];
  let opacityItem1 = [
    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
    opacity6,

    opacity0,
    opacity0,

    opacity0,

  ];
  let opacityItem2 = [
    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
    opacity6,

    opacity0,
    opacity0,
    

    opacity0,
    opacity1,

    opacity2,

  ];
  let opacityItem3 = [
    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
    opacity6,


    opacity0,
    opacity0,

    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
  ];
  let opacityItem4 = [
    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
    opacity6,

    opacity0,
    opacity0,

    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
  ];
  let opacityItem5 = [
    opacity5,
    opacity5,

    opacity6,
    opacity6,

    opacity0,
    opacity0,

    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
  ];
  let opacityItem6 = [
    opacity6,
    opacity6,

    opacity0,
    opacity0,

    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
  ];
  let opacityItem7 = [


    opacity0,
    opacity0,


    opacity0,
    opacity1,

    opacity2,
    opacity2,

    opacity3,
    opacity3,

    opacity4,
    opacity4,

    opacity5,
    opacity5,

    opacity6,
    opacity6,

    opacity0
    
    
  ];

  switch (item.id) {
    case 1:
      return (
        <HomepageMotionItem
          optionMovement={option1Movement}
          opacityItem={opacityItem1}
          item={item}
        ></HomepageMotionItem>
      );
    case 2:
      return (
        <HomepageMotionItem
          optionMovement={option2Movement}
          opacityItem={opacityItem2}
          item={item}
        ></HomepageMotionItem>
      );
    case 3:
      return (
        <HomepageMotionItem
          optionMovement={option3Movement}
          opacityItem={opacityItem3}
          item={item}
        ></HomepageMotionItem>
      );
    case 4:
      return (
        <HomepageMotionItem
          optionMovement={option4Movement}
          opacityItem={opacityItem4}
          item={item}
        ></HomepageMotionItem>
      );
    case 5:
      return (
        <HomepageMotionItem
          optionMovement={option5Movement}
          opacityItem={opacityItem5}
          item={item}
        ></HomepageMotionItem>
      );
    case 6:
      return (
        <HomepageMotionItem
          optionMovement={option6Movement}
          opacityItem={opacityItem6}
          item={item}
        ></HomepageMotionItem>
      );
    case 7:
      return (
        <HomepageMotionItem
          optionMovement={option7Movement}
          opacityItem={opacityItem7}
          item={item}
        ></HomepageMotionItem>
      );
    
    default:
      console.log("error");
  }
};

export default HomePageAnimatedTextItem;
