import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const CreateDragDrop = (  
    props
    ) => {
    return (
	    <div className="img-left-textImg-container Full-container pipeline-drag-container ">
        <div className="createImgContainer" style={{backgroundImage: `url(${props.image2})`}} >
            
            <div className="absolute-pos">
            <motion.img drag dragMomentum={false} dragConstraints={{ top:0, left: -150, right: 400, bottom: 500 }} whileDrag={{ scale: 1.2 }} dragElastic={0.2}  src={props.image3} alt="" />
            <motion.img drag dragMomentum={false} dragConstraints={{ top:-200, left: -150, right: 400, bottom: 500 }} whileDrag={{ scale: 1.2 }}  dragElastic={0.2} src={props.image4} alt="" />
            </div>

        </div>
	      
	      <div>
	        <h3 className="orange-color-text">{props.title}</h3>
	        <p>{props.text}</p>
	        <Button />
	      </div>
	    </div>
	  )
}

export default CreateDragDrop