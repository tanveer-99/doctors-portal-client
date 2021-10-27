import React from 'react';
import Appointment from '../Appointment/Appointment';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header'
import Testimonials from '../Testimonials/Testimonials';
import Services from './../Services/Services';
import Blog from './../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Services></Services>
            <FeatureServices></FeatureServices>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;