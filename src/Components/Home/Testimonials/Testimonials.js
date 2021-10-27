import React from 'react';
import alex from '../../../images/Ellipse 1.png';
import jason from '../../../images/Ellipse 2.png';
import kit  from '../../../images/Ellipse 3.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const Testimonials = () => {

    const testimonialData = [
        {
            name: 'Alex Gray',
            img: alex,
            location: 'California'
        },
        {
            name: 'Jason Momoa',
            img: jason,
            location: 'New York'
        },
        {
            name: 'Kit Harrington',
            img: kit,
            location: 'Amsterdam'
        }
    ]

    return (
        <section id="testimonials"  className="Testimonials-section container mt-5 pt-5 ">
                <div className="mb-5 ">
                    <h4 style={{color: '#1CC7C1'}} className="mt-4 mb-3" >Testimonial</h4>
                    <h1 style={{color: '#3A4256'}} className="mb-4">What our patients <br></br> say</h1>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                        {
                            testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                        }
                    </div>
                </div>
                
        </section>
    );
};

export default Testimonials;