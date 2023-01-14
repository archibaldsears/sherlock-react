import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBContainer,
  } from "mdb-react-ui-kit";
  import { motion } from "framer-motion";
  import CardWithImage from "../materialComponents/wireframes/CardWithImage";

const HomePageThreeCards = ({cards}) => {
  return (
    <MDBContainer fluid className="bg-white">
    <section className="container pt-5 mt-5">
      <MDBRow evenly>
        {cards.map((card) => (
          <MDBCol sm="4" key={card.id}>
            <motion.div
              
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
            >
              <CardWithImage key={card.id} card={card}></CardWithImage>
            </motion.div>
          </MDBCol>
        ))}
      </MDBRow>
    </section>
  </MDBContainer>
  )
}

export default HomePageThreeCards