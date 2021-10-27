import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="mt-5 pt-4 ">
                <img style={{width: '20%'}} className="mb-4" src={service.img} alt=""></img>
                <h5 style={{color: '#3A4256'}}>{service.serviceName}</h5>
                <p className="text-secondary mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo!</p>
            </div>
        </div>
    );
};

export default ServiceDetails;