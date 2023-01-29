const initialState = {
  courses: null,
  course: null,
  // user: null,
  // token: null,
  // error: null,
  refresh: null
}

const coursesReducer = (state = initialState, action) => {
  switch(action.type) {

    case "GET_ALL_COURSES":
      const getAllUsersState = {
        ...state,
        courses: action.payload
      }
      state = getAllUsersState
      break

    case "GET_COURSE_BY_ID":
      const getCourseByIDState = {
        ...state,
        course: action.payload
      }
      state = getCourseByIDState
      break

    case "CREATE_COURSE":
      const createCourseState = {
        ...state,
        refresh: action.payload
      }
      state = createCourseState
      break

    case "UPDATE_COURSE":
      const updateCourseState = {
        ...state,
        refresh: action.payload
      }
      state = updateCourseState
      break

    case "DELETE_COURSE":
      const deleteCourseState = {
        ...state,
        refresh: action.payload
      }
      state = deleteCourseState
      break

    

    // case "REMOVE_ALL_USERS":
    //   const removeAllUsersState = {
    //     ...state,
    //     users: null
    //   }
    //   state = removeAllUsersState
    //   break

    // case "UPDATE_USER":
    //   const updateUserState = {
    //       ...state,
    //       refresh: action.payload
    //     }
    //     state = updateUserState
    //     break
    
    // case "CREATE_USER":
    //   const createUserState = {
    //       ...state,
    //       refresh: action.payload
    //     }
    //     state = createUserState
    //     break

    // case "DELETE_USER":
    //   const deleteUserState = {
    //       ...state,
    //       refresh: action.payload
    //     }
    //     state = deleteUserState
    //     break

    // case "ERROR":
    //   const errorState = {
    //     ...state,
    //     error: action.payload
    //   }
    //   state = errorState
    //   break

    default:
      break
  }
  return state
}

export default coursesReducer