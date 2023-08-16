import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  /*const [messageList, setMessageList] = useState([
    {
      text: 'Hello',
      author: 'Alex'
    },
    {
      text: 'Are you ready?',
      author: 'admin'
    },
    {
      text: 'To what?',
      author: 'Alex'
    },
    {
      text: 'to the study of "React.js"',
      author: 'admin'
    }
  ])*/

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
  )
}

export default App;

const Form = ({ data, setData, setMessage }) => {

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

      <input placeholder="Name" value={author} onChange={(e) =>
        setData(p => ({ ...p, author: e.target.value })
        )} />

      <input placeholder="Text" value={text} onChange={(e) =>
        setData(p => ({ ...p, text: e.target.value })
        )} />

      <button type="submit">Send message</button>

    </form>
  )
}