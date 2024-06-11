import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../app/store'
import { todosController } from '../networking/controllers/todos'
import { NewItem, Todo } from '../types/globalTypes'

export interface TodosState {
  todos: Todo[]
  loading: boolean
  error: string | undefined
}

export interface ItemCheck {
  id: string
  title: string
  description: string
  toCheck: boolean
}

export const manageCheck = createAsyncThunk<
  Todo,
  ItemCheck,
  { rejectValue: string }
>('todos/manageCheckTodo', async (itemCheck: ItemCheck, thunkAPI) => {
  try {
    return await todosController.modifyTodo(itemCheck)
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
export const postNewTodo = createAsyncThunk<
  Todo,
  NewItem,
  { rejectValue: string }
>('todos/newTodo', async (addItem: NewItem, thunkAPI) => {
  try {
    return await todosController.postNewTodo(addItem)
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
      .addCase(manageCheck.fulfilled, state => {
        state.loading = true
        state.error = ''
      })
      .addCase(manageCheck.pending, state => {
        state.loading = true
        state.error = ''
      })
      .addCase(manageCheck.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(postNewTodo.fulfilled, state => {
        state.loading = false
        state.error = ''
      })
      .addCase(postNewTodo.pending, state => {
        state.loading = true
        state.error = ''
      })
      .addCase(postNewTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
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

export const stateSelector = (state: RootState): TodosState => state.todos

export const todosSelector = (state: RootState): Todo[] => state.todos.todos

export const loadingSelector = (state: RootState): boolean =>
  state.todos.loading

export const errorSelector = (state: RootState): string | undefined =>
  state.todos.error

export default todosSlice.reducer

export const { addNewTodo, check, unchecked, clearAllDone } = todosSlice.actions
