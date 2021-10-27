import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {

    const infoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn, NY 10003 USA',
            icon: faMapMarked,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+15124435454',
            icon: faPhone,
            background: 'primary'
        },

    ]

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;