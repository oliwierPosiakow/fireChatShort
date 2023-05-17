import {auth} from "../firebase";
export default function SignOut(){
    return auth.currentUser && (
        <button className='signout' onClick={() => auth.signOut()}>Sign Out</button>
    )
}