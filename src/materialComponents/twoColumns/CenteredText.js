import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

const CenteredText = () => {
  let text = {
    text1: "hello",
    text2: "hello2",
    text3: "hello4",
    text5: "hello5",
  };

  return (
    <>
      <motion.div>
        <MDBContainer>
          <motion.div>
            <MDBRow>
              <motion.div>
                <MDBCol  md="3" className="d-flex ">
                  <MotionH1 text1={text.text1}></MotionH1>
                </MDBCol>
              </motion.div>
              <motion.div>
              <MDBCol  md="3" className="d-flex ">
                  <MotionH1 text1={text.text2}></MotionH1>
                </MDBCol>
              </motion.div>
            </MDBRow>
          </motion.div>
        </MDBContainer>
      </motion.div>
    </>
  );
};

export default CenteredText;



function MotionH1(props) {
    return <motion.h1 className="text-right">{props.text1}</motion.h1>;
  }