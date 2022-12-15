const initialState = {
  user: null,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case "AUTHENTICATE_USER":
      const authenticateUserState = {
        ...state,
        user: action.payload
      }
      state = authenticateUserState
      break

    case "UNAUTHENTICATE_USER":
      const unauthenticateUserState = {
        ...state,
        user: null
      }
      state = unauthenticateUserState
      break

      case "ERROR":
      const errorState = {
        ...state,
        error: action.payload
      }
      state = errorState
      break

    default:
      break
  }
  return state
}

export default userReducer