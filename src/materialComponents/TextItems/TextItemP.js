import React from 'react'

const TextItemP = ({copy, size}) => {
    let htmlRendr
    switch (size) {
        case "small":
            return <p className="text-muted">{copy}</p>;
        case "med":
            return <p className="lead fw-normal text-muted">{copy}</p>;
        default:
            return <p className="lead fw-normal text-muted">{copy}</p>;
    }

}

export default TextItemP