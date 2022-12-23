import React from 'react'
import Button from './Button'

const ImageTxtFullWidth = ({direction, image, title, text, btnText, btnColor, btnType, btnLink}) => {

if ({direction} === 'left') {
    return (
        <div className='Create-container Full-container'>
            <img src={image} alt="" />
            <div>
            <h3 className='orange-color-text'>{title}</h3>
            <p>{text}</p>
            <Button />
            </div>
        </div>
      )
} else if ({direction} === 'right') {
    return (
        <div>ImageTxtFullWidth</div>
      )
} else {
    return (
        <h1>nowork</h1>
    )
}

}

export default ImageTxtFullWidth