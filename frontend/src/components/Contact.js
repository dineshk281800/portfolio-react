import React from 'react'
import './contact.css';

const Contact = () => {
    return (
        <>
            <div className="bostami-page-content-wrap">
                <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                        <h2 className="page-title">contact</h2>
                    </div>
                </div>
                <div className="section-wrapper pl-60 pr-60 mb-60">
                    <div className="contact-area bg-light-white-2">
                        <h5 className="contact-title">I'm Always Ready To Work With You</h5>
                        <form className="contact-form">
                            <div className="form-input-item mb-60">
                                <label className={`input-lebel name ${true ? "height" : ""}`}>name *</label>
                                <input className={`input-box name false ${true ? "height" : ""}`} required="" type="text" name="name" fdprocessedid="0sjcygn" />
                            </div>
                            <div className="form-input-item mb-60">
                                <label className="input-lebel gmail">Email *</label>
                                <input className="input-box gmail false " required="" type="Email" name="email" fdprocessedid="t4eddh" />
                            </div>
                            <div className="form-input-item mb-40">
                                <label className="input-lebel message">Message *</label>
                                <textarea name="message" className="input-box message false " cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-btn-wrap">
                                <button type="submit" value="Send" className="form-btn" fdprocessedid="4e3yb">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-copyright text-center pt-25 pb-25"><span>Copyright © Dinesh - All rights reserved</span></div>
            </div>
        </>
    )
}

export default Contact