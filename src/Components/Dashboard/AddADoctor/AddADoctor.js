import React from 'react';
import './AddADoctor.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const AddADoctor = () => {

    const [doctorInfo, setDoctorInfo] = useState();
    const [isDoctorAdded, setIsDoctorAdded] = useState(false);

    const handleName = (e) => {
        const docName = e.target.value;
        const newName = {...doctorInfo};
        newName.name = docName;
        setDoctorInfo(newName);
    }
    const handleAge = (e) => {
        const age = e.target.value;
        const newAge = {...doctorInfo};
        newAge.age = age;
        setDoctorInfo(newAge);
    }
    const handleEmail = (e) => {
        const email = e.target.value;
        const newEmail = {...doctorInfo};
        newEmail.email = email;
        setDoctorInfo(newEmail);
    }
    const handleHomeButton = ()=> {
        setIsDoctorAdded(false);
    }
    const handleFormSubmit = (e) => {
        fetch('https://mighty-hollows-97879.herokuapp.com/addADoctor', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({doctorInfo: doctorInfo})
        })
        .then(response => response.json())
        .then(data  => {
            setIsDoctorAdded(true);
        })
        e.preventDefault();
    }
    return (
        <div>
            {
                isDoctorAdded ? 
                <div>
                    <h1 className="mb-5" style={{color: 'green'}}>Congratulations!  Doctor Added.</h1>
                    <Link to="/">
                        <button onClick={handleHomeButton} className="btn btn-success">Go to Home</button>
                    </Link>
                </div>
                :
                <form onSubmit={handleFormSubmit}>
                    <input onBlur={handleName} type="text" name="doctorName" placeholder="Doctor Name"
                    required></input>
                    <br />
                    <input onBlur={handleEmail} type="text" name="doctorEmail" placeholder="Doctor Email"
                    required></input>
                    <br />
                    <input onBlur={handleAge} type="number" name="doctorAge" placeholder="Doctor Age"
                    required></input>
                    <br />
                    {/* <input type="file" name="image" placeholder="Upload An Image" required></input>
                    <br /> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            }
        </div>
    );
};

export default AddADoctor;