import React from 'react'
import Button from './Button'

const ImgTxtFullWidthRight = (props) => {
  return (
    <div className="Adapt-container Full-container">
    <div className="Main-container">
      <h3>Adapt.</h3>
      <p>
        We take your assets and reproduce them to any size, language, style,
        or device — however you want it, we can get it done.
      </p>

      <Button Text="See our work" />
    </div>
    <img src={props.adaptImg} alt="" />
  </div>
  )
}

export default ImgTxtFullWidthRight