import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Messages from "../components/Message"

const chatsPlaceholder = [
    {
        recipient: "Alex",
        messages: [
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
    },
    {
        recipient: "Jessica",
        messages: [
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'Alex',
                text: 'Привет',
                date: new Date().toLocaleTimeString()
            },
        ]
    },
]

const ChatsPage = () => {
    const [chats, setChats] = useState(chatsPlaceholder)
    const { chatId } = useParams()

    return (
        <div className='PageMessage'>
            <div className='chatList'>
                <h2>Чаты</h2>
                <>
                    <ChatList chats={chats} />
                    <button onClick={() => {
                        setChats(p => [...p, chatsPlaceholder[0]])
                    }}>+</button>
                </>
            </div>
            {
                chats[chatId] ? <Messages message={chats[chatId].messages
                } /> : <h2>Выберите чат</h2>
            }
        </div>
    )
}

const ChatList = ({ chats }) => {
    return (
        <>
            {chats.map((e, id) =>
                <div key={id}>
                    <button onClick={() => {
                        chats.splice(id)
                    }}>❌</button>
                    <Link to={`${id}`}>{e.recipient}</Link>
                </div>
            )}
        </>
    )
}


export default ChatsPage