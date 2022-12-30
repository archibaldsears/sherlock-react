import Button from "./Button"

const CardItems = ({ card }) => {
  return (
    <div>
        <img src={card.image} alt="" />
        <h3>{card.title}</h3>
        <p>{card.copy}</p>
        <Button 
        Text={card.btnText}
        Color={card.btnColor}
        Type={card.type}
        onClick={card.BtnOnclick}
        />
  </div>
  )
}

export default CardItems