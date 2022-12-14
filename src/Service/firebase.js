
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpcaFxp-9jpDwABdq7N5ahmZoaiRn7pbk",
  authDomain: "react-auth-14823.firebaseapp.com",
  projectId: "react-auth-14823",
  storageBucket: "react-auth-14823.appspot.com",
  messagingSenderId: "466411226969",
  appId: "1:466411226969:web:c78f2b1f08dce46e5aae48",
  measurementId: "G-GS5R9VZEBM"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider =new GoogleAuthProvider();
export const fbprovider =new FacebookAuthProvider();
export const signin =()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const username =result.user.displayName
        const photo=result.user.photoURL
        localStorage.setItem('name',username)
        localStorage.setItem('image',photo)
        
        console.log(username,photo)
    })
    .catch(error=>{console.log(error)})
}
export const fbsignin = ()=>{
    signInWithPopup(auth,fbprovider)
    .then((result)=>{
        
        console.log(result)

}) .catch(error=>{console.log(error)})}
