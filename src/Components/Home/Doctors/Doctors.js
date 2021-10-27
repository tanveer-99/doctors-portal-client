import React from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
const Doctors = () => {

    const doctorsData = [
        {
            name: 'Dr. Caudi',
            phone: '+987647264'
        },
        {
            name: 'Dr. Alex Gray',
            phone: '+945764375'
        },
        {
            name: 'Dr. John Mitchel',
            phone: '+942318238'
        }
    ]

    return (
        <section className="doctors-section container text-center mt-5 pt-5 mb-5 pb-5">
            <h4 className="mb-5 pb-5" style={{color: '#1CC7C1'}}>Our Doctors</h4>
            <div className="d-flex justify-content-center">
               <div className="row">
                   {
                       doctorsData.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
                   }
               </div>
            </div>
        </section>
    );
};

export default Doctors;