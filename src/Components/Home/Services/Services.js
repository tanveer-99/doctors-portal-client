import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {

    const serviceDetails  = [
        {
            serviceName: 'Fluoride Treatment',
            img: fluoride
        },
        {
            serviceName: 'Cavity Filling',
            img: cavity
        },
        {
            serviceName: 'Teeth Whitening',
            img: whitening
        }
    ]

    return (
        <section id="services" className="text-center mt-5">
            <div>
                <h6 style={{color: '#1CC7C1'}}>OUR SERVICES</h6>
                <h2 style={{color: '#3A4256'}}>Services We Provide</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="w-75 row">
                    {
                        serviceDetails.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;