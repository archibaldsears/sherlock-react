// import ImageTxtFullWidthLeft from "../components/ImageTxtFullWidthLeft";
import Button from "../components/Button";
import SectionHeaderHorizontal from "../components/SectionHeaderHorizontal";
import ImgTxtFullWidthRight from "../components/ImgTxtFullWidthRight";
import CreateDragDrop from "./CreateDragDrop";


import "../css/PipelineSection.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function PipelineManage(props) {
  return (
    <div className="Manage-container Full-container">
      <img src={props.manageImg} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Button Text={props.btnText} />
      </div>
    </div>
  );
}

const PipelineSection = (props) => {
  // const PipelineCopy = [
  //   {
  //     direction: 'left',
  //     image: props.createImg,
  //     title: 'Create.',
  //     text:'We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures.',
  //     btnText:'Try it out',
  //   },
  // ]
  // const left = true;
  // const right = false;

  return (
    <MDBContainer fluid className="p-0 m-0">
      <section className="Pipeline-container section-container">
        <SectionHeaderHorizontal
          Img2={props.pipelineImg2}
          Logo={props.pipelineLogo}
          Img1={props.pipelineImg1}
          text="Our custom-built production management software is what sets us apart. Pipeline automates key parts of your workflow, gathers and presents data and insights, and keeps everything in one place. Plus, it integrates with your own project management software."
        />


      <MDBContainer>
        <MDBRow>
          <MDBCol lg="8" style={{position:'relative'}}>
          <CreateDragDrop
          style={{width:'100%'}}
          image={props.createImg}
          image2={props.createImg2}
          image3={props.createImg3}
          image4={props.createImg4}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          btnText="Try it out"
          />
          </MDBCol>
          <MDBCol lg="4" className="d-inline align-middle" >
              <div className="create-text">
                <h3 className="orange-color-text">Adjust.</h3>
                <p>Seamless review tools allow you to markup, comment, and leave decisions on assets within the Pipeline workflow. You can even make your own adjustments to assets in the tool.</p>
                <Button />
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>





        <ImgTxtFullWidthRight
          adaptImg={props.adaptImg}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          btnText="Try it out"
          direction=""
        />


        <PipelineManage
          manageImg={props.manageImg}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          btnText="Try it out"
          direction=""
        />

        <div className="deliver-container Main-container">
          <div className="row-area">
          <h3 className="red-color-text ">Deliver</h3>
	        <p>We develop automated delivery processes, including automatic file naming and sizing, so your project can be completed at the literal click of a button.</p>
          
          </div>


          
        </div>
      </section>
    </MDBContainer>
  );
};

export default PipelineSection;
