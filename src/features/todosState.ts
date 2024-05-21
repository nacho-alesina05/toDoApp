import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { TodosState } from '../entities/globalTypes'
import { Todo } from '../entities/globalTypes'
import { todosController } from '../networking/controllers/todos'
export const getAllTodos = createAsyncThunk<
  Todo[],
  void,
  { rejectValue: string }
>('todos/getAllTodos', async (_, thunkAPI) => {
  try {
    return await todosController.getTodos()
  } catch (error) {
    if (
      typeof error === 'object' &&
      error &&
      'message' in error &&
      typeof error.message === 'string'
    ) {
      return thunkAPI.rejectWithValue(error.message)
    } else {
      return thunkAPI.rejectWithValue(JSON.stringify(error))
    }
  }
})

const initialState: TodosState = {
  error: undefined,
  loading: false,
  todos: [],
}

export const todosSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loading = false
        state.error = ''
      })
      .addCase(getAllTodos.pending, state => {
        state.loading = true
        state.error = ''
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
  initialState,
  name: 'todos',
  reducers: {
    addNewTodo: (state, action) => {
      const { title, description } = action.payload
      const idNewTodo = state.todos.length
        ? state.todos[state.todos.length - 1].id + 1
        : 0

      const newTodo: Todo = {
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
