import Button from './Button'

const ImageTxtFullWidth = ({direction, image, title, text, btnText, btnColor, btnType, btnLink}) => {

    return (
        <div className='Create-container Full-container'>
            <img src={image} alt="" />
            <div>
            <h3 className='orange-color-text'>{title}</h3>
            <p>{text}</p>
            <Button
            </div>
        </div>
      )



}

export default ImageTxtFullWidth