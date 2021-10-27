import React from 'react';

const Patients = ({appointmentsByDate}) => {
    return (
        <div>

            <table class="table table-striped pe-4 ps-3 mb-4">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
              

                {
                    appointmentsByDate.length>0 &&
                    appointmentsByDate.map(appointment => 
                        <tr className="pe-4 ps-3">
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.weight}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.phone}</td>
                        </tr>
                    )
            }
                
                
            </tbody>
            </table>

            
        </div>
    );
};

export default Patients;