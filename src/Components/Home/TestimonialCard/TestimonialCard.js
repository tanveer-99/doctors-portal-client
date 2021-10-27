import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div style={{padding: '40px 30px'}} className="testimonial-card shadow rounded">
                <div>
                    <p className="text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium modi nemo repellat incidunt nobis provident esse hic, cum reprehenderit magnam est sequi id quas corrupti ex at praesentium Id</p>
                </div>
                <div className="d-flex align-items-center">

                    <img className="me-3 ms-3" style={{width: '20%'}} src={testimonial.img} alt=""></img>

                    <div>
                        <h6 style={{color: '#1CC7C1'}}>{testimonial.name}</h6>
                        <p className="text-secondary">{testimonial.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;