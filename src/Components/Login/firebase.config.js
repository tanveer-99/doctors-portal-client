import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAv53ItUe2WzjH5qX7kYV5brKc5y91T1h4",
    authDomain: "doctors-portal-af360.firebaseapp.com",
    projectId: "doctors-portal-af360",
    storageBucket: "doctors-portal-af360.appspot.com",
    messagingSenderId: "94835871329",
    appId: "1:94835871329:web:66d040c570a89f77a7a420"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;