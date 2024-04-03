import { useState } from 'react';
import './about.css';

const About = () => {
    const [active, setActive] = useState("Skills")
    const [activeTab, setActiveTab] = useState("Skills")
    const opentab = (about) => {
        setActive(about)
        setActiveTab(about)
    }

    const tabs = [
        { menu: "Skills" },
        { menu: "Experience" },
        { menu: "Education" }
    ]

    const skills = [
        { heading: "Frontend Development", language: "HTML / CSS / JavaScript / React" },
        { heading: "Backend Development", language: "Node.js / Express.js / MongoDB / Python / Basic Java" }
    ]

    const educations = [
        { year: "2022", level: "B.E Civil Engineering - Kongu Engineering College, Perundurai." },
        { year: "2018", level: "HSC - Sengunthar Hr Sec School, Erode." },
        { year: "2016", level: "SSLC - Government Boys Hr Sec School, Erode." },
    ]
    return (
        <>
            <div className="bostami-page-content-wrap">
                <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                        <h2 className="page-title">about</h2>
                        <p>Hi, I'm Dinesh, a passionate MERN Developer with a focus on creating intuitive and engaging digital experiences. As a developer, my goal is to create user-centered designs that not only look great but also provide a seamless and enjoyable experience for the user.</p>
                        <p>I love staying up-to-date on the latest design trends and technologies, and I am always eager to learn and expand my skillset.</p>
                    </div>
                </div>
                <div className="section-wrapper pr-60 pl-60 pr-60">
                    <div className="tabTitles">
                        {tabs.map((tab, index) => (
                            <p key={index} className={`${active === tab.menu ? "tabLinks activeLink" : "tabLinks"} font-semibold`} onClick={() => opentab(tab.menu)}>{tab.menu}</p>
                        ))}
                    </div>
                    <div className="aboutContainers">
                        {/* <!-- --------skills-------- --> */}

                        <div className={activeTab === tabs[0].menu ? "tabContents activeTab" : "tabContents"} id="skills">
                            <div className="detailsContainer">
                                <div className="skillsContainer">
                                    <ul>
                                        {skills.map((skill, index) => (
                                            <li key={index} className="skills">
                                                <strong className="detailHeading">{skill.heading}</strong>
                                                <br />
                                                {skill.language}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- --------experience-------- --> */}

                        <div className={activeTab === tabs[1].menu ? "tabContents activeTab" : "tabContents"} id="experience">
                            <div className="detailsContainer">
                                <strong className="detailHeading">Recodem Private Limited, Chennai</strong><br />
                                <p className=''>Aug 2023 - Jan 2024 (5 months - Internship)</p>
                                <strong className="detailHeading">Job Position here</strong>
                                <ul className="ul">
                                    <li>
                                        As an intern at Recodem, have worked to build and develop an
                                        ecommerce website in both front-end and back-end.
                                    </li>
                                    <li>Have worked on API’s to connect with servers.</li>
                                    <li>Have worked with Non-Relational Database(MongoDB).</li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- --------education-------- --> */}

                        <div className={activeTab === tabs[2].menu ? "tabContents activeTab" : "tabContents"} id="education">
                            <div className="detailsContainer">
                                {educations.map((education, index) => (
                                    <div key={index}>
                                        <strong className="detailHeading">{education.year}</strong>
                                        <p className="educationDetails">
                                            {education.level}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center pt-25 pb-25"><span>Copyright © Dinesh - All rights reserved</span></div>
            </div>
        </>
    )
}

export default About