import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import AddADoctor from '../AddADoctor/AddADoctor.js';
import AppointmentsForPatients from '../AppointmentsForPatients/AppointmentsForPatients.js';
import Patients from '../Patients/Patients.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { UserContext } from './../../../App';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
}
const appointmentStyle = {
    backgroundColor: 'white',
    marginRight: '20px',
    borderRadius: '10px',
    paddingLeft: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
}

const Dashboard = () => {

    const [appointmentOn, setAppointmentOn] = useState(true);
    const [patientsOn, setPatientsOn] = useState(false);
    const [addDoctorOn, setAddDoctorOn] = useState(false);

    const [appointmentsByDate, setAppointmentsByDate] = useState({});

    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
            
        fetch('https://mighty-hollows-97879.herokuapp.com/appointmentsByDate', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data  => {
            setAppointmentsByDate(data);
        })

    }, [loggedInUser.email])

    return (
        <div>
            <div style={containerStyle} className=" row">
                
                <div className="col-md-3">
                    <Sidebar setAppointmentOn={setAppointmentOn} setPatientsOn={setPatientsOn}
                    setAddDoctorOn={setAddDoctorOn}>
                    </Sidebar>
                </div>

                {
                    appointmentOn && 

                    <div className="col-md-9">
                        <h4 className="mt-5 ms-2 mb-5">Appointments</h4>
                        <div style={appointmentStyle}>
                            <AppointmentsForPatients appointmentsByDate={appointmentsByDate}></AppointmentsForPatients>
                        </div>
                    </div>
                }
                {
                    
                    addDoctorOn && 

                    <div className="col-md-9">
                        <h4 className="mt-5 ms-2 mb-5">Add A Doctor</h4>
                        <div style={appointmentStyle}>
                            <AddADoctor></AddADoctor>
                        </div>
                    </div>
                }
                {
                   
                   patientsOn && 

                   <div className="col-md-9">
                       <h4 className="mt-5 ms-2 mb-5">Patients</h4>
                       <div style={appointmentStyle}>
                           <Patients appointmentsByDate={appointmentsByDate}></Patients>
                       </div>
                   </div>
                    
                }
            </div>
        </div>
    );
};

export default Dashboard;



