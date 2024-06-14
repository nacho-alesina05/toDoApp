import { Endpoints } from '../networking/endpoints'
import { ErrorMsgs } from '../networking/errorMsgs'

function endpointMatch(endpoint: string): string {
  const match = endpoint.match(/\/tasks\/[^\/]+$/)
  if (match) {
    return endpoint.replace(/\/tasks\/[^\/]+$/, '/tasks/%s')
  }
  return endpoint
}

export function manageNetworkError(status: number, endpoint: string) {
  let msg = ''
  endpoint = endpointMatch(endpoint)
  switch (status) {
    case 404: {
      endpoint === Endpoints.ModifyTodo || endpoint === Endpoints.DeleteTodo
        ? (msg = ErrorMsgs.todoDoesntExist)
        : (msg = ErrorMsgs.unknownError)

      break
    }
    case 400: {
      endpoint === Endpoints.ModifyTodo || endpoint === Endpoints.PostNewTodo
        ? (msg = ErrorMsgs.wrongValues)
        : (msg = ErrorMsgs.unknownError)

      break
    }
    case 422: {
      endpoint === Endpoints.PostNewTodo
        ? (msg = ErrorMsgs.validationFailed)
        : (msg = ErrorMsgs.unknownError)
      break
    }
    case 204: {
      endpoint === Endpoints.DeleteTodo
        ? (msg = ErrorMsgs.deleteTodo)
        : (msg = ErrorMsgs.unknownError)
      break
    }
    default: {
      msg = ErrorMsgs.unknownError
      break
    }
  }
  return msg
}
