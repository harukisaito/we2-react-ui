const initialState = {
  display: null,
}

const displayReducer = (state = initialState, action) => {
  switch(action.type) {

    case "DISPLAY_USER_MANAGEMENT":
      const displayUserManagementState = {
        ...state,
        display: action.payload,
      }
      state = displayUserManagementState
      break

    case "DISPLAY_APPLICATIONS":
      const displayApplicationsState = {
        ...state,
        display: action.payload,
      }
      state = displayApplicationsState
      break

    case "DISPLAY_COURSES":
      const displayCoursesState = {
        ...state,
        display: action.payload,
      }
      state = displayCoursesState
      break

    case "DISPLAY_HOME":
      const displayHomeState = {
        ...state,
        display: action.payload,
      }
      state = displayHomeState
      break

    default:
      break
  }
  return state
}

export default displayReducer