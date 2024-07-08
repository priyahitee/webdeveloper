import React, { useRef } from 'react';
import './Form.css'


const Form = () => {

    // creating a reference object to access input field directly by ref
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const companyInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phone = phoneInputRef.current.value;
        const company = companyInputRef.current.value;
        const message = messageInputRef.current.value;
        if(name && email && phone && company && message !== " "){
            const meetupData = {
                name,
                email,
                phone,
                company,
                message
              };
              console.log( meetupData)
        }     
    }


    return (
        <section className="formWrapper">
            <p className="formWrapper_text">
                Want to try out our software solutions? Or speak to one of our sales representatives who
                can quickly understand your requirements?
                <strong>Fill out the form below to register your interest!</strong>
            </p>
            <div className="formWrapper_container">
                <div className="imageContainer">
                    <img
                        className="lazy-hidden"
                        src="/images/contact-main-img.webp"
                        alt="contact-main-img"
                        width="685"
                        height="765"
                    />
                </div>
                <div className="formContainer">
                    <h2 className="formContainer_heading">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="inputWrapper">
                            <input type="text" id="txtName" ref={nameInputRef} required />
                            <label>Name</label>
                        </div>
                        <div className="inputWrapper">
                            <input type="email" id="txtEmail" ref={emailInputRef} required/>
                            <label>Email Address</label>
                        </div>
                        <div className="inputWrapper">
                            <input type="tel" id="txtPhone"ref={phoneInputRef} required/>
                            <label>Phone Number</label>
                        </div>
                        <div className="inputWrapper">
                            <input type="text" id="txtCompanyName" ref={companyInputRef} required/>
                            <label>Company Name</label>
                        </div>
                        <div className="inputWrapper">
                            <textarea name="message" id="message" cols="30" rows="1" ref={messageInputRef} required></textarea>
                            <label>Message</label>
                        </div>
                        <div className="inputWrapper">
                            <button type="submit" id="cmdSubmit" className="btn whiteBtn">REQUEST FREE TRIAL</button>
                        </div>
                        <span id="formInput" className="text"> Form Input: </span>     
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form