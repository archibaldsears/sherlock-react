import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const CreateDragDrop = (props) => {
  return (
    <div className="img-left-textImg-container Full-container pipeline-drag-container ">
      <div
        className="createImgContainer"
        style={{ backgroundImage: `url(${props.image2})` }}
      >
        <div className="absolute-pos">
          <motion.img
            drag
            dragMomentum={false}
            dragConstraints={{ top: 0, left: -150, right: 300, bottom: 500 }}
            whileDrag={{ opacity: 0.8, scale: 1 }}
            dragElastic={0.1}
            src={props.image3}
            whileHover={{ scale: 1.05 }}
            alt=""
          />
          <motion.img
            drag
            dragMomentum={false}
            dragConstraints={{ top: -180, left: -150, right: 300, bottom: 500 }}
            whileDrag={{ opacity: 0.8, scale: 1 }}
            dragElastic={0.1}
            src={props.image3}
            whileHover={{ scale: 1.05 }}
            alt=""
          />
        </div>
      </div>

      <div className="create-text">
        <h3 className="orange-color-text">{props.title}</h3>
        <p>{props.text}</p>
        <Button />
      </div>
    </div>
  );
};

export default CreateDragDrop;
