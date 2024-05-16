import { createSlice } from '@reduxjs/toolkit'

import { mockedType } from '../screens/Home'
export interface TodosState {
  todos: mockedType[]
}

const initialState: TodosState = {
  todos: [
    { checked: false, description: 'hasdf', id: 0, title: 'pruebaRed' },
    { checked: true, description: 'hasdf', id: 1, title: 'prueba2Red' },
  ],
}

export const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    check: (state, action) => {
      state.todos[action.payload].checked = true
    },
    clearAllDone: state => {
      state.todos = state.todos.filter(obj => {
        return obj.checked === false
      })
    },
    unchecked: (state, action) => {
      state.todos[action.payload].checked = false
    },
  },
})

export default todosSlice.reducer

export const { check, unchecked, clearAllDone } = todosSlice.actions
