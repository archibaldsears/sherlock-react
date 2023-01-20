import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
// import Button from '../../components/Button';
import "../../css/MovingShapes.scss";
// import mapImg from "../../images/mapImg@4x.png";
import computerImg from "../../images/ComputerPipelineScreen@4x.webp";
import TextCopyBtnCol from '../columns/TextCopyBtnCol';
// import adaptImg from "../../images/Adapt-img@4x.webp";

const FullWidthImg = ({img}) => {
  return (
    <MDBContainer fluid className='p-0 m-0'>
        <MDBRow>
            <MDBCol md="12">
                <img src={img} alt="" className="img-fluid p-0 m-0" />

        
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}

export default FullWidthImg