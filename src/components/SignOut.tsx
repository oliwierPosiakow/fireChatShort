import {auth} from "../firebase";
export default function SignOut(){
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}