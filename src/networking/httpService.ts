const baseUrl = 'https://jsonplaceholder.typicode.com'

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

export const httpService = {
  get,
}
