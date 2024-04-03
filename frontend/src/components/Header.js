import { useState } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [mobileView, setMobileView] = useState(false)
    const menuViewHandler = () => {
        setMobileView(!mobileView)
    }

    const [active, setActive] = useState("About");
    const location = window.location.pathname;
    console.log(location)
    const toggleHandler = (value) => {
        console.log("value", value)
        setActive(value)
    }

    const nav = [
        { menu: "About", path: "/", icon: "fa-regular fa-user" },
        { menu: "Works", path: "/works", icon: "fa-solid fa-briefcase" },
        { menu: "Contact", path: "/contact", icon: "fa-solid fa-address-book" }
    ]
    return (
        <>
            <div className="bostami-header-area mb-30 ">
                <div className="container">
                    <div className="bostami-header-wrap">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="bostami-header-logo">
                                    {/* <a className="site-logo" href="#"> */}
                                    <img alt="logo" loading="lazy" width="153" decoding="async" data-nimg="1" src="images/dinesh1.png" />
                                    {/* </a> */}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="bostami-header-menu-btn text-right">
                                    {/* <div className="dark-btn dark-btn-stored mode-btn">
                                        <i className={`${true ? "moonicon fa-solid fa-moon" : "sunicon fa-light fa-sun-bright"}`}></i>
                                    </div> */}
                                    <div className={`menu-btn toggle_menu ${mobileView ? "active" : "false"}`} onClick={menuViewHandler}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-wrap">
                        <div className={`mobile-menu mobile_menu ${mobileView ? "active" : "false"} `}>
                            <div className="mean-bar">
                                <a href="#nav" className="meanmenu-reveal">
                                    <span>
                                        <span>
                                            <span></span>
                                        </span>
                                    </span>
                                </a>
                                <nav className="mean-nav">
                                    <ul>
                                        {nav.map((detail, index) => (
                                            <li key={index} className={`${(location === detail.path || active === detail.path) ? "active" : "false"}`}>
                                                <NavLink to={detail.path} onClick={() => toggleHandler(detail.path)}>
                                                    <span>
                                                        <i className={`${detail.icon}`}></i>
                                                    </span>
                                                    {detail.menu}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header