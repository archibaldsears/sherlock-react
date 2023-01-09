import ImageTxtFullWidthLeft from "../components/ImageTxtFullWidthLeft";
import Button from "../components/Button";
import SectionHeaderHorizontal from "../components/SectionHeaderHorizontal";
import ImgTxtFullWidthRight from "../components/ImgTxtFullWidthRight";

import "../css/PipelineSection.scss";

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
    <div className="Full-container">
      <section className="Pipeline-container section-container">
        <SectionHeaderHorizontal
          Img2={props.pipelineImg2}
          Logo={props.pipelineLogo}
          Img1={props.pipelineImg1}
          text="Our custom-built production management software is what sets us apart. Pipeline automates key parts of your workflow, gathers and presents data and insights, and keeps everything in one place. Plus, it integrates with your own project management software."
        />

        <ImageTxtFullWidthLeft
          image={props.createImg}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          btnText="Try it out"
          direction=""
        />

        <ImgTxtFullWidthRight
          adaptImg={props.adaptImg}
          title="Create."
          text="We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures."
          btnText="Try it out"
          direction=""
        />

        <ImageTxtFullWidthLeft
          image={props.createImg}
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
      </section>
    </div>
  );
};

export default PipelineSection;
