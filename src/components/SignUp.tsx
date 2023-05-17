import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebase.js'
import GoogleButton from "react-google-button";
import '../css/signup.css'

export default function SignUp() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <div className="signup" >
            <h1 className='signup__title'><span>Fire</span>Chat</h1>
            <p className='signup__slogan'>One chat for everyone</p>
            <p className='signup__desc'>Go ahead and SingIn with Google</p>
            <GoogleButton className='signup__button' onClick={signInWithGoogle}/>
        </div>
    )
}
