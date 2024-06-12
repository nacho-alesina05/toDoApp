const baseUrl = 'https://node-training-1ym5.onrender.com'

async function get<T = any>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint)
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    throw new Error(error.message)
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
        description: description,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error('The new todo could not be uploaded')
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    throw new Error(error.message)
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
        description: description,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'PUT',
    })
    if (!response.ok) {
      throw new Error('') //No error message so todos continue appearing, problem that error is not shown
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    throw new Error(error.message)
  }
}

async function httpDelete<T = any>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(baseUrl + endpoint, { method: 'DELETE' })
    if (!response.ok) {
      throw new Error('The new todo could not be deleted')
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    throw new Error(error.message)
  }
}

export const httpService = {
  get,
  httpDelete,
  post,
  put,
}
