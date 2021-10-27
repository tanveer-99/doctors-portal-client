import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../../App';

import {signOut} from "firebase/auth";
import auth from './../../Login/firebase.config';

const Navbar = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = ()=> {
        signOut(auth)
        .then(()=> {
            setLoggedInUser({});
        })
        .catch((error)=> {

        })
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto ">
                            <li  class="nav-item me-4">
                                <Link className="link" to="/"><a   style={{color: '#1CC7C1', fontSize: '1.15rem'}} class="nav-link active"  href="#home">Home</a></Link>
                            </li>
                            <li class="nav-item  me-4">
                                <p  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link" >About</p>
                            </li>
                            <Link className="link" to="/dashboard"><li class="nav-item  me-4">
                                <p  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link" >Dashboard</p>
                            </li></Link>
                            <li class="nav-item  me-4">
                                <a  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link"  href="#services">Dental Services</a>
                            </li>
                            <li class="nav-item  me-4">
                                <a  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link "  href="#testimonials">Reviews</a>
                            </li>
                            <li class="nav-item  me-4">
                                <a  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link "  href="#blogs">Blogs</a>
                            </li>
                            <li class="nav-item me-4">
                                <a  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link  "  href="#contact">Contact Us</a>
                            </li> 
                            {
                                loggedInUser.isSignedIn ?
                             
                                <li onClick={handleSignOut} class="nav-item me-4">
                                    <p  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} class="nav-link  "  >Log Out</p>
                                </li> 
                                :
                                <li class="nav-item me-4">
                                    <Link  style={{color: '#1CC7C1', fontSize: '1.15rem', cursor: 'pointer'}} to="/login" class="nav-link  "  href="#">Login</Link>
                                </li> 
                                
                            }            
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

