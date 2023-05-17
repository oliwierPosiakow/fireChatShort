import {useAuthState} from "react-firebase-hooks/auth";
// @ts-ignore
import {auth} from "../firebase.js";
import SignUp from "./SignUp";
// @ts-ignore
import Chat from "./Chat.jsx";
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
