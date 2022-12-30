import '../css/HomepageSection.scss'
import Faces from './Faces'


const ManageAnimation = ({faceImg}) => {
  return (
    <div className="Main-container">
    <section className='Section-one'>
      <h1>We manage your&nbsp;</h1> 
      <h1 className='item first'>project data.</h1>
      <h1 className='item second'>global brand delivery.</h1>
      <h1 className='item third'>creative localization.</h1>
      <h1 className='item fourth'>product launches.</h1>
      <h1 className='item fifth'>worldwide ad creation.</h1>
      <h1 className='item sixth'>creative design.</h1>
    </section>
    <Faces img={faceImg} />
  </div>
  )
}

export default ManageAnimation