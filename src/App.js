import React, { useState, useEffect, useRef, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Send from './Send';
import ListMessage from './listMessage';

import './App.scss';

function App() {

  const [messageList, setMessageList] = useState([])

  const [messageBody, setMessageBody] = useState([
    {
      text: '',
      author: ''
    }
  ])

  const ROBOT_MES = 'Привет. Скоро с вами свяжется оператор'

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(p => [...p, { text: ROBOT_MES, author: 'robot' }])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App-header">
      <div className="App">
        <div className='PageMessage'>
          <ListMessage />
          <div className='ViewMessage'>
            <div className='mesBlock'>
              {
                messageList.map(e =>
                  <div className="message">
                    <p className='author'>Автор: {e.author}</p>
                    <p>{e.text}</p>
                  </div>)
              }
            </div>
            {<Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

const Form = ({ data, setData, setMessage }) => {

  const ref = useRef(null);
  useEffect(() => {
    if (ref.count) {
      ref.current.focus()
    }

  }, [])

  const { text, author } = data
  const submitForm = (e) => {
    e.preventDefault()
    if (text.length > 0) {
      setMessage(p => [...p, { text, author }])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  return (
    <form className='formMessage' onSubmit={submitForm}>

      <TextField
        ref={ref}
        className='txtmes'
        id="outlined-basic"
        label="Сообщение"
        variant="outlined"
        value={text} onChange={(e) =>
          setData(p => ({ ...p, author: "Alex", text: e.target.value })
          )}
      />

      <Send />

    </form>
  )
}

