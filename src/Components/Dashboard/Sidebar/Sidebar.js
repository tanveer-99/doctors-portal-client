import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt ,faThLarge, faCalendarCheck, faUserFriends, faUserPlus, faCog, faFileMedical } from '@fortawesome/free-solid-svg-icons'

import { useState, useContext } from 'react';
import { UserContext } from './../../../App';
import { signOut } from 'firebase/auth';
import auth from './../../Login/firebase.config';
import { Link } from 'react-router-dom';





const Sidebar = ({setAppointmentOn, setPatientsOn, setAddDoctorOn}) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = ()=> {
        signOut(auth)
        .then(() => {
            setLoggedInUser({});
        })
        .catch(error => {

        })
    }




    const [isDoctor, setIsDoctor] = useState(false);
    const handlePatientsOn = () => {
        setPatientsOn(true);
        setAppointmentOn(false);
        setAddDoctorOn(false);
    }
    const handleAddDoctorOn = () => {
        setPatientsOn(false);
        setAppointmentOn(false);
        setAddDoctorOn(true);
    }
    const handleAppointmentOn = () => {
        setPatientsOn(false);
        setAppointmentOn(true);
        setAddDoctorOn(false);
    }

    fetch('https://mighty-hollows-97879.herokuapp.com/isDoctor', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data  => {
            setIsDoctor(data);
        })
    return (
        <div className="sidebar text-white">

            <div className="d-flex mb-4">
                <i className="me-3"><FontAwesomeIcon icon={faThLarge} /></i>
                <h6>Dashboard</h6>
            </div>

            <div className="d-flex mb-4">
                <i className="me-3"><FontAwesomeIcon icon={faCalendarCheck} /></i>
                <p onClick={handleAppointmentOn} className="link">
                    <h6>Appointments</h6>
                </p>
            </div>

            {
                isDoctor && 

                <div>
                    <div className="d-flex mb-4">
                        <i className="me-3"><FontAwesomeIcon icon={faUserFriends} /></i>
                        <p onClick={handlePatientsOn}  className="link">
                        <h6>Patients</h6>
                        </p>
                    </div>

                    <div className="d-flex mb-4">
                        <i className="me-3"><FontAwesomeIcon icon={faFileMedical} /></i>
                        <p className="link">
                            <h6>Prescriptions</h6>
                        </p>
                    </div>

                    <div className="d-flex mb-4">
                        <i className="me-3"><FontAwesomeIcon icon={faUserPlus} /></i>
                        <p onClick={handleAddDoctorOn}  className="link">
                            <h6>Add a Doctor</h6>
                        </p>
                    </div>

                    <div className="d-flex mb-4">
                        <i className="me-3"><FontAwesomeIcon icon={faCog} /></i>
                        <p  className="link">
                            <h6>Settings</h6>
                        </p>
                    </div>
                </div>
            }
            <br />
            <br />
            <br />
           
           

                    <div className="d-flex mb-4">
                        <i className="me-3"><FontAwesomeIcon icon={faSignOutAlt} /></i>
                        <Link to="/" onClick={handleSignOut} className="link">
                            <p>Log Out</p>
                        </Link>
                    </div>

        </div>
    );
};

export default Sidebar;