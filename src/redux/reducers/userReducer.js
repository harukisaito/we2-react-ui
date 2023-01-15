const initialState = {
  users: null,
  user: null,
  token: null,
  error: null,
  refresh: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case "AUTHENTICATE_USER":
      const authenticateUserState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
      state = authenticateUserState
      break

    case "UNAUTHENTICATE_USER":
      const unauthenticateUserState = {
        ...state,
        user: null,
        token: null
      }
      state = unauthenticateUserState
      break

    case "GET_ALL_USERS":
      const getAllUsersState = {
        ...state,
        users: action.payload
      }
      state = getAllUsersState
      break

    case "REMOVE_ALL_USERS":
      const removeAllUsersState = {
        ...state,
        users: null
      }
      state = removeAllUsersState
      break

    case "UPDATE_USER":
      const updateUserState = {
          ...state,
          refresh: action.payload
        }
        state = updateUserState
        break
    
    case "CREATE_USER":
      const createUserState = {
          ...state,
          refresh: action.payload
        }
        state = createUserState
        break

    case "DELETE_USER":
      const deleteUserState = {
          ...state,
          refresh: action.payload
        }
        state = deleteUserState
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