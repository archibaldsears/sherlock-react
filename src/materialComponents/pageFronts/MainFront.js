import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ImgCol from '../columns/ImgCol'

const MainFront = ({content}) => {
  return (
    <MDBContainer fluid className=' p-4 '>
    
    <MDBContainer className='p-4'>
    <div className="row align-items-center">
    <MDBCol className="mainFront text-center align-self-center">
        <h1 className='p-2'>{content.title}</h1>
        <p className='p-2'>{content.copy}</p>
        <ImgCol
        mdNumber="12"
        ></ImgCol>
    </MDBCol>
    </div>
    </MDBContainer>
    

    
    </MDBContainer>
  )
}

MainFront.defaultProps = {
    title: 'Title will go here',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export default MainFront