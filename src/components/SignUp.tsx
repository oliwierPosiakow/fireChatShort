import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebase.js'
import GoogleButton from "react-google-button";

export default function SignUp() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <div className="signup" >
            <GoogleButton onClick={signInWithGoogle}/>
        </div>
    )
}
