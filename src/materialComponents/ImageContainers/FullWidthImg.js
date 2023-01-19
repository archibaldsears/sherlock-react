import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

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