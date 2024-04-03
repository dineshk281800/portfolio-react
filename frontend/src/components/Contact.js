import React, { useState } from 'react'
import './contact.css';
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            Name: name,
            Email: email,
            Message: message
        }
        console.log(data)
        axios.post('https://sheet.best/api/sheets/c1fd6a3c-0ffb-42b6-9ba4-4df78f34650c', data).then(
            response => {
                console.log(response)
                setName('');
                setEmail('');
                setMessage('');
            }
        )
    }
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
                        <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
                            <div className="form-input-item mb-60">
                                <label className={`input-lebel name ${true ? "height" : ""}`}>name *</label>
                                <input className={`input-box name false ${true ? "height" : ""}`} required="" type="text" name="name" fdprocessedid="0sjcygn" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-input-item mb-60">
                                <label className="input-lebel gmail">Email *</label>
                                <input className="input-box gmail false " required="" type="Email" name="email" fdprocessedid="t4eddh" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-input-item mb-40">
                                <label className="input-lebel message">Message *</label>
                                <textarea name="message" className="input-box message false " cols="30" rows="10" value={message}
                                    onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <div className="form-btn-wrap">
                                <button type="submit" value="Send" className="form-btn" fdprocessedid="4e3yb">submit</button>
                            </div>
                        </form>
                        {/* <span id="msg"></span> */}
                    </div>
                </div>
                <div className="footer-copyright text-center pt-25 pb-25"><span>Copyright © Dinesh - All rights reserved</span></div>
            </div>
        </>
    )
}

export default Contact