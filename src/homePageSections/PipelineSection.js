// import ImageTxtFullWidthLeft from "../components/ImageTxtFullWidthLeft";
import Button from "../components/Button";
import SectionHeaderHorizontal from "../components/SectionHeaderHorizontal";
import ImgTxtFullWidthRight from "../components/ImgTxtFullWidthRight";
import CreateDragDrop from "./CreateDragDrop";


import "../css/PipelineSection.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ImageWithText from "../materialComponents/twoColumns/ImageWithText";
import TextCopyBtnCol from "../materialComponents/columns/TextCopyBtnCol";

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
          <MDBCol lg="8" className="overflow-visible"style={{position:'relative'}}>
          <CreateDragDrop
          style={{width:'100%'}}
          image={props.createImg}
          mandoBg={props.createImg2}
          image3={props.createImg3}
          image4={props.createImg4}
          mandoBgNoTT={props.mandoBgNoTT}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          
          />
          </MDBCol>

          <TextCopyBtnCol
            title={'Adjust.'}
            copy={'Seamless review tools allow you to markup, comment, and leave decisions on assets within the Pipeline workflow. You can even make your own adjustments to assets in the tool.'}
            // btnText={'Learn More'}
            mdNumberTxt="4"
            mdNumberImg="8"
          ></TextCopyBtnCol>
        </MDBRow>
      </MDBContainer>



      <MDBContainer className="pt-5 md-5 mt-5">
        <ImageWithText
        image={props.adaptImg}
        title="Create."
          copy="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          mdNumberTxt="4"
          mdNumberImg="8"
          direction="textRight"
      ></ImageWithText>
      </MDBContainer>

{/* 
        <PipelineManage
          manageImg={props.manageImg}
          title="Manage."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          
          direction=""
        /> */}

        <MDBContainer>
        <ImageWithText
          image={props.manageImg}
          direction="textLeft"
          title="Manage."
          copy="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          mdNumberTxt="4"
          mdNumberImg="8"
        ></ImageWithText> 
      

        </MDBContainer>
        <div className="deliver-container Main-container">
          <div className="row-area">
          <h3 className="title red-color-text ">Deliver</h3>
	        <p>We develop automated delivery processes, including automatic file naming and sizing, so your project can be completed at the literal click of a button.</p>
          
          </div>


          
        </div>
      </section>
    </MDBContainer>
  );
};

export default PipelineSection;
