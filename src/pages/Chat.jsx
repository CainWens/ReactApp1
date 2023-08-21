import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addChat, removeChat } from '../slices/slice'
import { useState } from "react"
import Messages from "../components/Message"

const Chats = () =>{
    const chat = useSelector(state=>state.chat)
    const messages = (state=>state.messages)
    const dispatch = useDispatch()

    const [currentChatId,setCurrentChatId] = useState(0)

    const NewChat = {
        id:'3',
        recipient:"Oleg",
        messages:[
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'You',
                text: 'И тебе привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'You',
                text: 'И тебе привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'You',
                text: 'И тебе привет',
                date: new Date().toLocaleTimeString()
            },
        ]
    }
    //1.07

    const addChatHandler = () =>{
        dispatch(addChat(NewChat))
    }

    const removeChatHandler = () =>{
        dispatch(removeChat())
    }

    return (
        <div className='PageMessage'>
            <div className='chatList'>
                <h2>Чаты</h2>
                <>
                    {
                        chat.map(({recipient},id)=><div key={id}>
                            <button onClick={() => {removeChatHandler()}}>❌</button>
                            <div onClick={()=>{setCurrentChatId(id)}}>{recipient}</div>
                        </div>
                        )
                    }
                    <button onClick={() => {addChatHandler()}}>Добавить чат</button>
                </>
            </div>
            {
                currentChatId && chat[currentChatId] ? <Messages message={chat[currentChatId].messages
                } /> : <h2>Выберите чат</h2>
            }
        </div>
    )
}

export default Chats