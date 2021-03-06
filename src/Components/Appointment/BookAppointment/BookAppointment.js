import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

export const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 AM - 11:30 AM',
        totalSpace: '10'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 AM - 6:30 AM',
        totalSpace: '10'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: '10'
    },
    {
        id: 5,
        subject: 'teeth orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    },
    {
        id: 6,
        subject: 'teeth orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    }
]

const BookAppointment = ({date}) => {
    
    return (
        <section className="container">
            <h1 className="text-center text-brand">Available appointment on {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(booking => <AppointmentCard booking={booking} date={date} key={booking.id}></AppointmentCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;