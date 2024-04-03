import './profile.css'

const Profile = () => {

    const medias = [
        { link: "https://linkedin.com/in/dineshk281800", icon: "fa-brands fa-linkedin-in", style: "linkedin" },
        { link: "https://github.com/dineshk281800", icon: "fa-brands fa-github", style: "github" }
    ]

    const details = [
        { topic: "Phone", reply: "+91 7598912549", style: "phone", icon: "fa-solid fa-mobile-screen-button" },
        { topic: "Email", reply: "dineshk281800@gmail.com", style: "email", icon: "fa-regular fa-envelope" },
        { topic: "Location", reply: "Erode, TamilNadu", style: "location", icon: "fa-solid fa-location-dot" },
        { topic: "Birthday", reply: "Oct 28, 2000", style: "birthday", icon: "fa-regular fa-calendar" }
    ]
    return (
        <>
            {/* <div className="col-xxl-3 col-xl-3"> */}
            <div className="bostami-parsonal-info-area">
                <div className="bostami-parsonal-info-wrap">
                    <div className="bostami-parsonal-info-img">
                        <img alt="avatar" loading="lazy" width="240" height="240" decoding="async" data-nimg="1" srcset="" src="./images/user-3.jpg" />
                    </div>
                    <h4 className="bostami-parsonal-info-name">
                        {/* <a href="#"> */}
                        Dinesh K
                        {/* </a> */}
                    </h4>
                    <span className="bostami-parsonal-info-bio mb-15">
                        MERN Stack Developer
                    </span>
                    <ul className="bostami-parsonal-info-social-link mb-30">
                        {medias.map((media, index) => (
                            <li key={index}>
                                <a href={media.link} className={media.style}>
                                    <i className={media.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="bostami-parsonal-info-contact mb-30">
                        {details.map((detail, index) => (
                            <div key={index} className="bostami-parsonal-info-contact-item">
                                <div className={`icon ${detail.style}`}>
                                    <i className={detail.icon}></i>
                                </div>
                                <div className="text">
                                    <span>{detail.topic}</span>
                                    <p>{detail.reply}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bostami-parsonal-info-btn">
                        <a className="btn-1" href="./images/resume FEB24 (1).pdf" download>
                            <span className="icon download">
                                <i className="fa-solid fa-download"></i>
                            </span>
                            Download Cv
                        </a>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Profile