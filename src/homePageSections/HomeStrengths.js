import '../css/HomeStrengths.css'
import Button from '../components/Button'

const HomeStrengths = ({homeImg1, homeImg2, homeImg3}) => {
  return (
    <div className='Full-container' style={{backgroundColor: 'white', position: 'relative', zIndex: '2'  }}>
    
    <div className='Main-container paddingSH'>
    <h1 className='Second-header'>With 10+ years in business and over 5 million assets delivered, we’ve gotten pretty good at a few things. r/w</h1>
    <section className='Section-two paddingSH' > 
        <div>
          <img src={homeImg1} alt="" />
          <h3>Project Management</h3>
          <p>From business insights to project tracking to translation management, every project provides a massive amount of data that’s a critical part of getting what you need built quickly. Our focus on managing your data means we’re constantly improving, while providing you with customized, actionable insights on-demand.</p>
          <Button 
          Text='Call to action'
          Color='Orange'
          Type='CTA'
          />
        </div>

        <div>
          <img src={homeImg2} alt="" />
          <h3>Data Management</h3>
          <p>Brief creation. Proof of concepts. Quote and budget approval. Design and localization management. Fast, simplified delivery. Your dedicated team works with you to build a workflow based on your needs, and can take a lot of tasks off your plate. We even help manage other vendors.</p>
          <Button Text='Call to action'/>
        </div>

        <div>
          <img src={homeImg3} alt="" />
          <h3>Global Support</h3>
          <p>Your work is global, and so is our team. We’re all over the world and are proud to offer round-the-clock support from our dedicated teams with seamless handover. So you can launch a project from Tokyo and get it delivered from London. No turbulence or delays.</p>
          <Button Text='Call to action'/>
        </div>

    </section>
    </div>
    </div>
  )
}

export default HomeStrengths