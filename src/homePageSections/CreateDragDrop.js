import React, { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { Resizable, ResizableBox } from "react-resizable";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../css/DragDrop.scss";

const MyHandle = React.forwardRef((props, ref) => {
  const { handleAxis, ...restProps } = props;
  return (
    <div ref={ref} className={`foo handle-${handleAxis}`} {...restProps} />
  );
});

const CreateDragDrop = (props) => {
  const [shouldDragBeEnabled, setDragEnable] = useState(false);
  return (
    <div
      className="createImgContainer"
      style={{ backgroundImage: `url(${props.image2})` }}
    >
      <div className="absolute-pos">
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: 0, left: -150, right: 300, bottom: 400 }}
          whileDrag={{ opacity: 0.8, scale: 1 }}
          dragElastic={0.1}
          dragListener={shouldDragBeEnabled}
          whileHover={{ scale: 1 }}
          alt=""
        >
          <ResizableBox
            width={219}
            height={88}
            minConstraints={[109, 44]}
            maxConstraints={[438, 176]}
          >
            <motion.img
              className="never-selector"
              src={props.image3}
              onHoverStart={() => setDragEnable(!shouldDragBeEnabled)}
              onHoverEnd={() => setDragEnable(!shouldDragBeEnabled)}
            />
          </ResizableBox>
        </motion.div>
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: -180, left: -150, right: 300, bottom: 200 }}
          whileDrag={{ opacity: 0.8, scale: 1 }}
          dragElastic={0.1}
          dragListener={shouldDragBeEnabled}
          whileHover={{ scale: 1 }}
          alt=""
        >
          <ResizableBox
            width={219}
            height={88}
            minConstraints={[109, 44]}
            maxConstraints={[438, 176]}
          >
            <motion.img
              className="never-selector"
              src={props.image4}
              onHoverStart={() => setDragEnable(!shouldDragBeEnabled)}
              onHoverEnd={() => setDragEnable(!shouldDragBeEnabled)}
            />
          </ResizableBox>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateDragDrop;

//dragConstraints={{ top: -180, left: -150, right: 300, bottom: 200 }}
