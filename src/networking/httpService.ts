import Config from 'react-native-config'

import { manageNetworkError } from '../types/errorHandler'

const baseUrl = Config.BACKEND
async function get<T = any>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint)
    if (!response.ok) {
      throw new Error(manageNetworkError(response.status, endpoint))
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
      throw new Error(manageNetworkError(response.status, endpoint))
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
      throw new Error(manageNetworkError(response.status, endpoint))
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
    if (!response.ok) {
      throw new Error(manageNetworkError(response.status, endpoint))
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
