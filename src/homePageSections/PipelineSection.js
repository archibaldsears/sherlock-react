

const PipelineSection = (props) => {
  return (
    <div className='Full-container'>
    <section className='Pipeline-container'>
        <div className='Pipeline-header'>
          <img  src={props.pipelineImg2} alt="" />
          <div>
            <img className='Pipeline-logo' src={props.pipelineLogo} alt="" />
            <p>Our custom-built production management software is what sets us apart. Pipeline automates key parts of your workflow, gathers and presents data and insights, and keeps everything in one place. Plus, it integrates with your own project management software.</p>
            <button>Learn More</button>
          </div>
          <img src={props.pipelineImg1} alt="" />
        </div>
        <div className='Create-container Full-container'>
          <img src={props.createImg} alt="" />
          <div>
            <h3 className='orange-color-text'>Create.</h3>
            <p>We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures.</p>
            <button>Try it out</button>
          </div>
        </div>
        <div className='Adapt-container Full-container'>
          <div className="Main-container">
            <h3>Adapt.</h3>
            <p>We take your assets and reproduce them to any size, language, style, or device — however you want it, we can get it done.</p>
            <button>See our work</button>
          </div>
          <img src={props.adaptImg} alt="" />
        </div>
        <div className='Manage-container '>
          <img src={props.manageImg} alt="" />
          <div>
            <h3>Manage.</h3>
            <p>We become experts in your brand, and love to work with you to produce original marketing assets, from responsive display ads to print brochures.</p>
            <button>Try it out</button>
          </div>
        </div>
    </section>
  </div>
  )
}

export default PipelineSection