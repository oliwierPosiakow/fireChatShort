import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase.js";
import SignUp from "./SignUp";
import Chat from "./Chat";
import '../css/app.css'

function App() {
  const [user] = useAuthState(auth)
  return (
    <main className='main-container'>
      {user
          ? <Chat/>
          : <SignUp/>
      }
    </main>
  )
}
export default App
