import React, { useState } from "react";
// import Button from "../components/Button";
import { motion } from "framer-motion";
import {  ResizableBox } from "react-resizable";
// import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../css/DragDrop.scss";

// const MyHandle = React.forwardRef((props, ref) => {
//   const { handleAxis, ...restProps } = props;
//   return (
//     <div ref={ref} className={`foo handle-${handleAxis}`} {...restProps} />
//   );
// });

const CreateDragDrop = (props) => {
  const [shouldDrag1BeEnabled, setDrag1Enable] = useState(false);
  const [shouldDrag2BeEnabled, setDrag2Enable] = useState(false);
  return (
    <div
      className="createImgContainer"
      style={{ backgroundImage: `url(${props.image2})` }}
    >
      <div className="absolute-pos">
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: -60, left: -350, right: 30, bottom: 200 }}
          whileDrag={{ opacity: 0.8, scale: 1 }}
          whileFocus={{zIndex: 2}}
          dragElastic={0.1}
          dragListener={shouldDrag1BeEnabled}
          whileHover={{ scale: 1.05 }}
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
              onHoverStart={() => {
                if (!shouldDrag1BeEnabled) 
                {setDrag1Enable(!shouldDrag1BeEnabled)} 
                }
              }
              onHoverEnd={() => {
                if (shouldDrag1BeEnabled) 
                {setDrag1Enable(!shouldDrag1BeEnabled)} 
                }}
            />
          </ResizableBox>


        </motion.div>
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: -200, left: -350, right: 30, bottom: 50 }}
          whileDrag={{ opacity: 0.8, scale: 1 }}
          whileFocus={{zIndex: 2}}
          dragElastic={0.1}
          dragListener={shouldDrag2BeEnabled}
          whileHover={{ scale: 1.05 }}
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
              onHoverStart={() => {
                if (!shouldDrag2BeEnabled) 
                {setDrag2Enable(!shouldDrag2BeEnabled)} 
                }
              }
              onHoverEnd={() => {
                if (shouldDrag2BeEnabled) 
                {setDrag2Enable(!shouldDrag2BeEnabled)} 
                }}
            />
          </ResizableBox>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateDragDrop;

//dragConstraints={{ top: -180, left: -150, right: 300, bottom: 200 }}
