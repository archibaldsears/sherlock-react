import React from 'react'
import { motion } from "framer-motion";
import { MDBCol } from "mdb-react-ui-kit";
import placeholder from "../../images/placeholder@4x.webp";
const ImgCol = ({image, mdNumberImg}) => {
    return (
        <MDBCol md={mdNumberImg} sm="12" className="
                            
                    mb-4 mb-md-0
                    position-relative
                    d-flex
                    align-items-center">
            
            <motion.img src={image} style={{position: 'relative', zIndex: '10'}}></motion.img>
            <div
            id="shape-1"
            className="
                    rounded-circle
                    position-absolute
                    opacity-40
                    scale-up-center
                    d-none d-md-block
                    "
            ></div>
        <div
            id="shape-2"
            className="
                    rounded-circle
                    position-absolute
                    opacity-40
                    scale-up-center
                    fade-delay-2000
                    d-none d-md-block
                    "
            ></div>
        <div
            id="shape-3"
            className="
            alt
                    rounded-circle
                    position-absolute
                    opacity-40
                    scale-up-center
                    fade-delay-4000
                    d-none d-md-block
                    "
            ></div>
            
        </MDBCol>
        );
}
ImgCol.defaultProps = {
    image: placeholder,
    mdNumberImg: "6"
}

export default ImgCol