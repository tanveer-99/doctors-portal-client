import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section id="contact" className="contact-section  mt-5 pt-5 mb-5">
            <div className="text-center">
                <div className="mb-5">
                    <h5 className="mb-3" style={{color: '#1CC7C1'}}>Contact</h5>
                    <h2 style={{color: 'white'}}>Always Connect With Us</h2>
                </div>
                <form>
                    <input type="text" name="email" placeholder="Email Address" required></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="subject" placeholder="Subject" required></input>
                    <br></br>
                    <br></br>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <br></br>
                    <button className="btn btn-primary btn-lg">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;