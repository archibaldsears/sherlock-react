import Button from "./Button"

const CardItems = ({id, image, title, copy, btnText, btnColor, type, BtnOnclick }) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{title}t</h3>
        <p>{copy}</p>
        <Button 
        Text={btnText}
        Color={btnColor}
        Type={type}
        onClick={BtnOnclick}
        />
  </div>
  )
}

export default CardItems