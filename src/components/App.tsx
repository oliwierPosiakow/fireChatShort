import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase.js";
import SignUp from "./SignUp";
import Chat from "./Chat";
import '../css/App.css'

function App() {
  const [user] = useAuthState(auth)
  return (
    <main>
      {user
          ? <Chat/>
          : <SignUp/>
      }
    </main>
  )
}

export default App
