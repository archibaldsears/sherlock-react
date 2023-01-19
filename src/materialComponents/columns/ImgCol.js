import React from 'react'
import { motion } from "framer-motion";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import placeholder from "../../images/placeholder@4x.png";
const ImgCol = ({image, mdNumber}) => {
    return (
        <MDBCol md={mdNumber} sm="12" className="
        mb-4 mb-md-0
        position-relative
        d-flex
        align-items-center">
            <div>
            <motion.img src={image}></motion.img>
            </div>
        </MDBCol>
        );
}
ImgCol.defaultProps = {
    image: placeholder,
    mdNumber: "6"
}

export default ImgCol