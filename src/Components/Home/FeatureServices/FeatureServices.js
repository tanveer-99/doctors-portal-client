import React from 'react';
import feature from '../../../images/feature.png';
const FeatureServices = () => {
    return (
        <section className="feature-section container mt-5 pt-5 mb-5">
            <div className="row">
                <div className="col-md-5">
                    <img  style={{width: '100%', marginRight: '0'}} src={feature} alt=""></img>
                </div>
                <div className="col-md-6">
                    <h1 className="mb-4 mt-5" style={{color: '#3A4256'}}>Exceptional dental <br></br> care, on your terms</h1>
                    <p className="text-secondary"style={{lineHeight: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae eos aspernatur esse temporibus voluptatem illum ab quod perferendis nihil? Sed rerum quos soluta beatae commodi, porro quae nisi sint officia, a quam quo iure vitae. Et, in maxime. Accusantium dicta minima animi aut magnam sed ab assumenda eius odit.</p>
                    <button className="btn btn-primary mt-4">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;