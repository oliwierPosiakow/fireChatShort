import SignOut from "./SignOut";
// @ts-ignore
import {auth, db} from '../firebase.js'
import ChatMessage from "./ChatMessage";
import {MdSend} from 'react-icons/md'
import {useEffect, useRef, useState} from "react";
import '../css/chat.css'
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    addDoc
} from 'firebase/firestore'

export default function Chat(){
    const [formVal, setFormVal] = useState('')
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    // @ts-ignore
    useEffect(()=> {
        const q = query(collection(db,'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnap) => {
            // @ts-ignore
            const messages = []
            querySnap.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            // @ts-ignore
            setMessages(messages)
        })
        return () => unsubscribe
    },[])
    // @ts-ignore
    const submitMessage = async (e) => {
        e.preventDefault()
        const {uid, displayName} = auth.currentUser
        if(formVal != ''){
            await addDoc(collection(db, 'messages'), {
                text: formVal,
                name: displayName,
                uid,
                timestamp: serverTimestamp()
            })
            setFormVal('')
            // @ts-ignore
            scroll.current.scrollIntoView({behavior: 'smooth'})
        }
    }


    // @ts-ignore
    return (
        <div className='main'>
            <header className='main__header'>
                <SignOut/>
            </header>
            <div className="main__messages">
                { messages &&
                    messages.map((msg) => {
                        // @ts-ignore
                        return <ChatMessage key={msg.id} msg={msg}/>
                    })
                }

                <span ref={scroll}></span>
            </div>
            <form className='main__form' onSubmit={submitMessage}>
                <input type="text"
                       onChange={(e)=> {setFormVal(e.target.value)}}
                       value={formVal}
                       placeholder='Message...'
                />
                <button><MdSend/></button>
            </form>
        </div>
    )
}