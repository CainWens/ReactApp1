import { createSlice } from '@reduxjs/toolkit';

const initChat = [
    {
        id: 0,
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
        id:1,
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

const chatSlice = createSlice({
    name: 'chat',
    initialState: initChat,
    reducers: {
        addChat: (state, action) => {
            return [...state, action.payload]
        },
        removeChat: (state) => {
            return [...state.filter((e, i) => state.splice(e,1))]
        },
        addMessage: (state, action) => {
            state[state.payload.id].messages.push(action.payload.data)
            return state
        }
    }
})

export const { addChat, removeChat, addMessage } = chatSlice.actions

export const chatReducer = chatSlice.reducer