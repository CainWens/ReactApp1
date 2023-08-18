import TextField from '@mui/material/TextField';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Send from '../Send';
import { Link } from 'react-router-dom';

const Message = ({ message }) => {

    const [messageList, setMessageList] = useState(message)
    const [messageBody, setMessageBody] = useState([
        {
            text: '',
            author: '',
            date: ''
        }
    ])

    return (
        <div className='ViewMessage'>

            <div className='closeChat'><Link to={'/chats'}>X</Link></div>

            <div className='mesBlock'>
                {
                    messageList.map((e, i) =>
                        <div className="message">
                            <p className='author'>Автор: {e.author}</p>
                            <p>{e.text}</p>
                            <p>{e.date}</p>
                        </div>)
                }
            </div>
            {<Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>}
        </div>
    )
}

export default Message

const Form = ({ data, setData, setMessage }) => {

    const { text, author, date } = data
    const submitForm = (e) => {
        e.preventDefault()
        if (text.length > 0) {
            setMessage(p => [...p, { text, author, date }])
        }
        setData(
            {
                text: '',
                author: '',
                date: ''
            }
        )
    }

    return (
        <form className='formMessage' onSubmit={submitForm}>

            <TextField
                className='txtmes'
                id="outlined-basic"
                label="Сообщение"
                variant="outlined"
                value={text} onChange={(e) =>
                    setData(p => ({ ...p, date: new Date().toLocaleTimeString(), author: "Rain", text: e.target.value })
                    )}
            />

            <Send />

        </form>
    )
}