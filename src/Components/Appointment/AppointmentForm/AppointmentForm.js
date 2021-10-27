import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('https://mighty-hollows-97879.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            
                closeModal();
                alert("Appointment Booked!");          
        })

        
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className="text-center text-secondary"><small>On {date.toDateString()}</small></p>
                <form className="p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name", { required: true })} type="text" className="form-control mb-3" name="name" placeholder="Your Name"></input>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input {...register("phone", { required: true })} type="text" className="form-control mb-3" name="phone" placeholder="Phone Number"></input>
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input {...register("email", { required: true })} type="text" className="form-control mb-3" name="email" placeholder="Your Email"></input>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3 row">
                        <div className="col-4">

                        <select {...register("gender", { required: true })} class="form-control" name="gender">
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Not set">Not Set</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                        
                        </div>

                        <div className="col-4">
                            <input {...register("age", { required: true })} type="number" name="age" placeholder="Age" className="form-control"></input>
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input {...register("weight", { required: true })} type="number" name="weight" placeholder="weight" className="form-control"></input>
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>


                    </div>
                    <div className="form-group text-center">
                        <button  type="submit" className="btn btn-brand">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;