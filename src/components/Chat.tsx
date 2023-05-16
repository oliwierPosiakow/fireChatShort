import SignOut from "./SignOut";
import {db} from '../firebase.js'
import ChatMessage from "./ChatMessage";
import {useEffect, useState} from "react";
import {collection, getDocs, orderBy, query} from 'firebase/firestore'
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function Chat(){
    const [formVal, setFormVal] = useState('')

    const messagesRef = collection(db, 'messages')
    const q = query(messagesRef, orderBy('createdAt'))
    const [messages] = useCollectionData(q, {idField: 'id'})


    // useEffect(() => {
    //     getDocs(collection(db, 'messages'))
    //         .then(querySnapshot => {
    //             const messagesArr = []
    //             querySnapshot.forEach((doc) => {
    //                 console.log(doc.text)
    //                 messagesArr.push(doc)
    //             })
    //             setMessages(messagesArr)
    //         })
    // },[])


    const submitMessage = async (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <SignOut/>
            { messages &&
                messages.map((msg, index) => {
                    return <ChatMessage key={msg.id} msg={msg}/>
                })
            }
            <form onSubmit={submitMessage}>
                <input type="text"
                       onChange={(e)=> {setFormVal(e.target.value)}}
                       value={formVal}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}