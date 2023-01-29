const initialState = {
  applications: null,
  refresh: null
}

const applicationReducer = (state = initialState, action) => {
  switch(action.type) {

    case "GET_ALL_APPLICATIONS":
      const getAllUsersState = {
        ...state,
        applications: action.payload
      }
      state = getAllUsersState
      break

    case "CREATE_APPLICATION":
      const createApplicationState = {
        ...state,
        refresh: action.payload
      }
      state = createApplicationState
      break

    case "DELETE_APPLICATION":
      const deleteApplicationState = {
        ...state,
        refresh: action.payload
      }
      state = deleteApplicationState
      break

    default:
      break
  }
  return state
}

export default applicationReducer