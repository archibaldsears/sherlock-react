import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBBtn,
    MDBRipple,

    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
import Button from '../../components/Button';
import TextItemP from '../TextItems/TextItemP';

const CardWithImage = ({card}) => {
  return (
    <MDBCard  className='h-100 bg-transparent shadow-none py-5 text-center'>
    <MDBRipple rippleColor='primary' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={card.image} fluid alt='...' />
      {/* <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a> */}
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle style={{fontSize: '2rem'}} >{card.title}</MDBCardTitle>
      
         <TextItemP
         copy={card.copy}
         size="small"
         ></TextItemP>
      
      <Button 
        Text={card.btnText}
        /> 
    </MDBCardBody>
  </MDBCard>
  )
}

export default CardWithImage