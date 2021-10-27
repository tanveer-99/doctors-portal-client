import React, { useContext, useState } from 'react';
import loginImage from '../../images/loginImage.png'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faGoogle  } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';
import auth from './firebase.config';






const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [userInfo] = useState({
        name: '',
        email: '',
        isSignedIn: false,
        error: ''
    });

    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                const newUserInfo = {...userInfo};
                newUserInfo.name = user.displayName;
                newUserInfo.email = user.email;
                newUserInfo.isSignedIn = true; 
                newUserInfo.image = user.photoURL;
                setLoggedInUser(newUserInfo);
                history.replace(from);
                
            }).catch((error) => {
                const errorMessage = error.message;

                const newUserInfo = {...userInfo};
                newUserInfo.error = errorMessage;
                setLoggedInUser(newUserInfo);

            });
    }

    
    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="shadow"
                    style={{padding: '70px', borderRadius: '20px'}}
                    >
                        <h4 className="mb-4">Login</h4>

                        {
                            loggedInUser.email ?
                            <button onClick={handleGoogleSignIn}
                            style={{
                                color: 'white',
                                border: 'none',
                                backgroundColor: '#15d1c0',
                                padding: '10px 20px',
                                borderRadius: '10px'
                            }}>
                                <i className="me-2"><FontAwesomeIcon icon={faGoogle} />
                                </i>

                                Log Out
                            </button>
                            :
                            <button onClick={handleGoogleSignIn}
                            style={{
                                color: 'white',
                                border: 'none',
                                backgroundColor: '#15d1c0',
                                padding: '10px 20px',
                                borderRadius: '10px'
                            }}>
                                <i className="me-2"><FontAwesomeIcon icon={faGoogle} />
                                </i>

                                Google Sign In
                            </button>
                        }

                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{width: '80%'}} src={loginImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;