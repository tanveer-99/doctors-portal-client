import React from 'react';
import doctorImage from '../../../images/doctorCut.png'
const DoctorsCard = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="doctor-card shadow rounded py-3">
                <img className="mb-4" style={{width: '100%'}} src={doctorImage} alt="" />
                <h4 style={{color: '#3A4256'}}>{doctor.name}</h4>
                <p className="text-secondary">{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorsCard;