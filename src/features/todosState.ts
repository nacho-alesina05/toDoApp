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
    addNewTodo: (state, action) => {
      const { title, description } = action.payload
      const idNewTodo = state.todos.length
        ? state.todos[state.todos.length - 1].id + 1
        : 0

      const newTodo: mockedType = {
        checked: false,
        description,
        id: idNewTodo,
        title,
      }
      state.todos.push(newTodo)
    },
    check: (state, action) => {
      const todoToCheck = state.todos.find(todo => todo.id === action.payload)
      if (todoToCheck) {
        todoToCheck.checked = true
      }
    },
    clearAllDone: state => {
      state.todos = state.todos.filter(obj => {
        return obj.checked === false
      })
    },
    unchecked: (state, action) => {
      const todoToCheck = state.todos.find(todo => todo.id === action.payload)
      if (todoToCheck) {
        todoToCheck.checked = false
      }
    },
  },
})

export default todosSlice.reducer

export const { addNewTodo, check, unchecked, clearAllDone } = todosSlice.actions
