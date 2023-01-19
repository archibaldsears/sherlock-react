import React from 'react'

const TextItemH3 = ({title, titleHighlighted}) => {
    return (
        <h3 className="display-4 fw-bold lh-1 ls-tight mb-5">
          {title} {titleHighlighted && <br />}{" "}
          {titleHighlighted && (
            <span className="text-primary">{titleHighlighted}</span>
          )}
        </h3>
      );
}

export default TextItemH3