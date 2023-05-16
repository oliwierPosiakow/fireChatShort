import '../css/App.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase.js";
import {useCollectionData} from "react-firebase-hooks/firestore";
import SignUp from "./SignUp";
import Chat from "./Chat";

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
