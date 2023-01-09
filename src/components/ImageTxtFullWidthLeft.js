import Button from "./Button";

const ImageTxtFullWidthLeft = ({
  direction,
  image,
  title,
  text,
  btnText,
  btnColor,
  btnType,
  btnLink,
}) => {
	  return (
	    <div className="img-left-textImg-container Full-container">
	      <img src={image} alt="" />
	      <div>
	        <h3 className="orange-color-text">{title}</h3>
	        <p>{text}</p>
	        <Button />
	      </div>
	    </div>
	  );
}; 

export default ImageTxtFullWidthLeft;
