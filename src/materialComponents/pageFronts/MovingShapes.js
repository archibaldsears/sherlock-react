import React from 'react'
import "../../css/MovingShapes.scss";
// import mapImg from "../../images/mapImg@4x.png";
import computerImg from "../../images/ComputerPipelineScreen@4x.webp";
// import adaptImg from "../../images/Adapt-img@4x.webp";


const MovingShapes = () => {
  return (
    <div className="container my-5">
    <div className="row gx-lg-5 pt-5">
        <div className="col-md-5 mb-9 mb-md-0 d-flex align-items-center p-4">
        <div>
            <h1 className="display-4 fw-bold lh-1 ls-tight mb-5">
            Powered by<br />
            <span className="text-secondary">Sherlock Pipeline</span>
            </h1>

            <p className="lead fw-normal text-muted">
            Our software keeps every element of your project together, in one place, while helping us produce and deliver your assets. You can order new projects, manage spend, produce instant adaptations, track your work, and get automated delivery—all from your homepage. It’s your favorite software you’ve never heard of.
            </p>

            <button type="button" className="btn btn-secondary btn-lg mt-4 me-2">
            Get Started
            </button>
            <button
                    type="button"
                    className="btn btn-link text-secondary btn-lg mt-4"
                    data-ripple-color="secondary"
                    >
            Read more
            </button>
        </div>
        </div>

        <div
            className="
                    col-md-7
                    mb-4 mb-md-0
                    position-relative
                    d-flex
                    align-items-center
                    "
            >
        <img
            src={computerImg}
            className="w-100"
            id="featured-image"
            alt=""
            />

        <div
            id="shape-1"
            className="
                    rounded-circle
                    position-absolute
                    opacity-70
                    scale-up-center
                    d-none d-md-block
                    "
            ></div>
        <div
            id="shape-2"
            className="
                    rounded-circle
                    position-absolute
                    opacity-70
                    scale-up-center
                    fade-delay-2000
                    d-none d-md-block
                    "
            ></div>
        <div
            id="shape-3"
            className="
                    rounded-circle
                    position-absolute
                    opacity-70
                    scale-up-center
                    fade-delay-4000
                    d-none d-md-block
                    "
            ></div>
        </div>
    </div>
    </div>
  )
}

export default MovingShapes