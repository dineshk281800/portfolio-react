import React from 'react'

import './cardTransparentLayoutBg.css'

const CardTransParentLayoutBg = ({ show, setShow }) => {
    const handleShow = () => {
        setShow(0)
    }
    console.log(show)
    return (
        <>
            <div className={`modal portfolio-modal-box  ${show.length ? "show" : "fade"}`}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h6 className="blog-title">{show[0].topic}</h6>
                            <div className="portfolio-modal-table">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="portfolio-modal-table-text">
                                            <i className="fa-regular fa-file-lines"></i>
                                            Project : <span>{show[0].project}</span>
                                        </h3>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="portfolio-modal-table-text">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            Preview : <a href={`${show[0].website}`}>{show[0].domain}</a>
                                        </h3>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="portfolio-modal-table-text">
                                            <i className="fa-solid fa-code"></i>
                                            Langages : <span>{show[0].language}</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="h1-modal-paragraph">
                                <p>
                                    {show[0].description}
                                </p>
                            </div>
                            <div className="h1-modal-img">
                                <img className='card-layout-img' alt="portfolio" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src={`${show[0].image}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-header">
                <button type="button" className="close" onClick={handleShow}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </>
    )
}

export default CardTransParentLayoutBg