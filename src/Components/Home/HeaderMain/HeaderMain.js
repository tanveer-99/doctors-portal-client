import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../../images/chair.png"
const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br></br> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam atque quidem quibusdam commodi assumenda consequatur voluptate. Ratione laudantium asperiores maiores.</p>
                <Link to="/appointments"><button className="btn btn-primary">Get Appointment</button>
</Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;