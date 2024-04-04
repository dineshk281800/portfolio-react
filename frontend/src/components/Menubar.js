import React, { useState } from 'react'
import './menubar.css'
import { Link, NavLink } from 'react-router-dom'

const Menubar = () => {

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
            <div className="bostami-main-menu-wrap">
                <nav className="bastami-main-menu main_menu">
                    <ul>
                        {nav.map((detail, index) => (
                            <li key={index} className={`${(location === detail.path || active === detail.path) ? "active" : "false"}`}>
                                <Link to={detail.path} onClick={() => toggleHandler(detail.path)}>
                                    <span>
                                        <i className={`${detail.icon} icon`}></i>
                                    </span>
                                    {detail.menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menubar