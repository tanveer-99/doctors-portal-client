import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faGoogle, faTwitter  } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <section className="footer-section container mt-5 pt-5 mb-5 ">
            <div className="row">
                <div className="col-md-3">

                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Services</h5>
                    <p className="text-secondary">Emergency Dental Care</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Treatment of Personal Diseases</p>
                    <p className="text-secondary">Tooth Extraction</p>
                    <p className="text-secondary">Check Up</p>

                </div>
                <div className="col-md-3">

                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Services</h5>
                    <p className="text-secondary">Emergency Dental Care</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Treatment of Personal Diseases</p>
                    <p className="text-secondary">Tooth Extraction</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Check Up</p>


                </div>
                <div className="col-md-3">

                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Oral Health</h5>
                    <p className="text-secondary">Emergency Dental Care</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Treatment of Personal Diseases</p>
                    <p className="text-secondary">Tooth Extraction</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Check Up</p>
                    <p className="text-secondary">Check Up</p>

                </div>
                <div className="col-md-3">
                    <h5 className="mb-4" style={{color: '#1CC7C1'}}>Our Adress</h5>
                    <p className="text-secondary">New York - 101010 Hudson Yards</p>
                    <br></br>
                    <i className="me-4" style={{fontSize: '2rem', cursor:'pointer'}}><FontAwesomeIcon icon={faFacebookF} /></i>
                    <i className="me-4" style={{fontSize: '2rem', cursor:'pointer'}}><FontAwesomeIcon icon={faGoogle} /></i>
                    <i className="me-4" style={{fontSize: '2rem', cursor:'pointer'}}><FontAwesomeIcon icon={faTwitter} /></i>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="text-secondary">Call Now</p>
                    <button className="btn btn-primary">+54534534</button>
                </div>

            </div>
            <p className="text-center text-secondary pt-5 mt-5">Copyright {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-center text-secondary mt-3">MDH Tanvir</p>
        </section>
    );
};

export default Footer;
