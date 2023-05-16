export default function ChatMessage(props){
    return(
        <div className="message">
            <p className='message__p'>{props.msg.text}</p>
        </div>
    )
}