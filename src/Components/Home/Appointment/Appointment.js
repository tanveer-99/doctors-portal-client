import React from 'react';
import './Appointment.css'
import appointment from '../../../images/doctor.png'
import { Link } from 'react-router-dom';
const Appointment = () => {
    return (
        <section className=" appointment-section">
            <div className="row">
                <div className="col-md-5">
                    <img className="appointment-image" src={appointment} alt=""></img>
                </div>
                <div className="col-md-6">
                    <h4 style={{color: '#1CC7C1'}} className="mt-4 mb-3" >Appointment</h4>
                    <h1 className="mb-4" style={{color: 'white'}}>Make an appointment <br></br> today</h1>
                    <p style={{color: 'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit odit dignissimos veritatis quos distinctio voluptatem laborum? Voluptates.</p>
                    <Link to="/appointments"><button className="btn btn-primary mt-4">Learn More</button></Link>

                </div>
            </div>
        </section>
    );
};

export default Appointment;