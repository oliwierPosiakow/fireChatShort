import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'
import {FcGoogle} from "react-icons/all";
import {useState} from "react";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth()
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token:string|undefined = credential?.accessToken
                const user = result.user
            }).catch((e) => {
            console.log(e.message)
        })
    }
    const signInWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <div className="signup" onSubmit={signInWithEmail}>
            <form className="signup-form">
                <input
                    type="text"
                    placeholder="Nickname"
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
            <button onClick={signInWithGoogle}>
                <FcGoogle/>
                Up with Google
            </button>
        </div>
    )
}
