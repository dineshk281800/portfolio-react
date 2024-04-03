import './layoutCardTransparentBg.css'

const CardTransparentLayoutBg = ({ show, setShow }) => {
    console.log(show)
    const handleShow = () => {
        setShow(0)
    }
    return (
        <>

            <div className={`modals modals-box ${show.length ? "show" : "fade"} `}>
                <div className='modals-dialog modals-dialog-centered'>
                    <div className='modals-content'>
                        <div className="modals-body">
                            <h6 className="project-title">
                                {show[0].topic}
                            </h6>
                            <div className="modals-table">
                                <div className="rows">
                                    <div className="column-1">
                                        <h3 className="modals-table-text">
                                            <i className='fa-regular fa-file-lines'></i>
                                            Project :
                                            <span>{show[0].project}</span>
                                        </h3>
                                    </div>
                                    <div className="column-2">
                                        <h3 className="modals-table-text">
                                            <i className='fa-solid fa-arrow-up-right-from-square'></i>
                                            Preview :
                                            <a href={`${show[0].website}`}>{show[0].domain}</a>
                                        </h3>
                                    </div>
                                    <div className="column-3">
                                        <h3 className="modals-table-text">
                                            <i className='fa-solid fa-code'></i>
                                            Language : <span>{show[0].language}</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className='modals-para'>
                                <p>
                                    {show[0].description}
                                </p>
                            </div>
                            <div className="modals-img">
                                <img src={`${show[0].image}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modals-header">
                <button type="button" className='close' onClick={handleShow}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </>

    )
}

export default CardTransparentLayoutBg