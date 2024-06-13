import { ErrorMsgs } from './errorMsgs'

const baseUrl = 'https://node-training-1ym5.onrender.com'

async function get<T = any>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint)
    if (!response.ok) {
      throw new Error(ErrorMsgs.fetchTodos)
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}

async function post<T = any>(
  endpoint: string,
  title: string,
  description: string,
): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint, {
      body: JSON.stringify({
        description,
        title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error(ErrorMsgs.uploadingTodos)
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}

async function put<T = any>(
  endpoint: string,
  title: string,
  description: string,
  toCheck: boolean,
): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint, {
      body: JSON.stringify({
        completed: toCheck,
        description,
        title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'PUT',
    })
    if (!response.ok) {
      throw new Error(ErrorMsgs.modifyTodo)
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}

async function httpDelete(endpoint: string): Promise<void> {
  try {
    const response = await fetch(baseUrl + endpoint, { method: 'DELETE' })
    if (response.ok) {
      throw new Error(ErrorMsgs.deleteTodo)
    }
    return
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}

export const httpService = {
  get,
  httpDelete,
  post,
  put,
}
