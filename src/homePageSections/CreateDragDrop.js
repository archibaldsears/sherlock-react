import React, { useState } from "react";
// import Button from "../components/Button";
import { motion } from "framer-motion";
import { ResizableBox } from "react-resizable";
// import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../css/DragDrop.scss";
import Button from "../components/Button";

const CreateDragDrop = (props) => {
  const [shouldDrag1BeEnabled, setDrag1Enable] = useState(false);
  const [shouldDrag2BeEnabled, setDrag2Enable] = useState(false);
  const [showTT, setShowTT] = useState(true);

  let toggleText = "Hide the original english";
  let btnToggleType = "primary";
  const toggle = React.useCallback(
    
    () => {
      setShowTT(!showTT)
    },
    [showTT, setShowTT, toggleText, btnToggleType],
  );
  

  if (showTT) {
    toggleText = "Hide the original english title"
    btnToggleType = "primary"
  } else {
    toggleText="Show the original english title"
    btnToggleType = "secondary"
  }
  


  return (
    <div
      className="createImgContainer overflow-visible "
      style={{ backgroundImage: `url(${showTT ? props.mandoBg : props.mandoBgNoTT})` }}
    >
      <div className="btn-above">
        <div className="text-container">
          <Button
          Text={toggleText}
          onClick={toggle}
          // Type={btnToggleType}
          ></Button>
        </div>
      </div>
      <div className="absolute-pos">
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: -60, left: -450, right: 30, bottom: 200 }}
          whileDrag={{ opacity: 0.8, scale: 1 }}
          whileFocus={{ zIndex: 2 }}
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
            lockAspectRatio={true}
          >
            <motion.img
              className="never-selector"
              src={props.image3}
              onHoverStart={() => {
                if (!shouldDrag1BeEnabled) {
                  setDrag1Enable(!shouldDrag1BeEnabled);
                }
              }}
              onHoverEnd={() => {
                if (shouldDrag1BeEnabled) {
                  setDrag1Enable(!shouldDrag1BeEnabled);
                }
              }}
            />
          </ResizableBox>
        </motion.div>
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={{ top: -200, left: -450, right: 30, bottom: 50 }}
          whileDrag={{ opacity: 0.8, scale: 1}}
          whileFocus={{ zIndex: 2 }}
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
            lockAspectRatio={true}
          >
            <motion.img
              className="never-selector"
              src={props.image4}
              // whileHover={{border: '1px dashed white'}}
              
              onHoverStart={() => {
                if (!shouldDrag2BeEnabled) {
                  setDrag2Enable(!shouldDrag2BeEnabled);
                }
              }}
              onHoverEnd={() => {
                if (shouldDrag2BeEnabled) {
                  setDrag2Enable(!shouldDrag2BeEnabled);
                }
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
