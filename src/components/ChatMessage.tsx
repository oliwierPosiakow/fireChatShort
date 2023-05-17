// @ts-ignore
import {auth} from "../firebase";
import '../css/message.css'

export default function ChatMessage(props){
    const {name, text, uid} = props.msg
    const messageClass:string = uid === auth.currentUser.uid ? 'sent' : 'received'
    return(
        <div className={messageClass + ' message'}>
            <p className='message__name'>{name}</p>
            <p className={messageClass + ' message__text'}>{text}</p>
        </div>
    )
}