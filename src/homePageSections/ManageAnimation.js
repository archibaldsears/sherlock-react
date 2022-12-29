import '../css/HomepageSection.scss'
import Faces from './Faces'


const ManageAnimation = ({faceImg}) => {
  return (
    <div className="Main-container">
    <section className='Section-one'>
      <h1>We manage your&nbsp;</h1> 
      <h2 className='first'>global brand delivery.</h2>
      <h2 className='second'>project data.</h2>
      <h2 className='third'>creative localization.</h2>
      <h2 className='fourth'>product launches.</h2>
      <h2 className='fifth'>worldwide ad creation.</h2>
      <h2 className='sixth'>creative design</h2>
    </section>
    <Faces img={faceImg} />
  </div>
  )
}

export default ManageAnimation