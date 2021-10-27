import React from 'react';
const AppointmentsForPatients = ({appointmentsByDate}) => {

    return (
        <div>

            <table class="table table-striped pe-4 ps-3 mb-4">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Schedule</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                </tr>
            </thead>
            <tbody>
              

                {
                    appointmentsByDate.length>0 &&
                    appointmentsByDate.map(appointment => 
                        <tr className="pe-4 ps-3">
                            <td>{appointment.name}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.service}</td>
                        </tr>
                    )
            }
                
                
            </tbody>
            </table>

            
        </div>
    );
};

export default AppointmentsForPatients;