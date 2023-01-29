import { getAllCourses as getAllCourseApi } from './courseApi'
import { getCourseByID as getCourseByIDApi } from './courseApi'
import { createCourse as createCourseApi } from './courseApi'
import { updateCourse as updateCourseApi } from './courseApi'
import { deleteCourse as deleteCourseApi } from './courseApi'


const getAllCoursesAction = (token) => {
  const getAllCourses = (dispatchToReducer) => {
    const getAllCoursesPromise = getAllCourseApi(token)
    
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (users) => {
      let action 

      if(!users) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "GET_ALL_COURSES",
          payload: users
        }
      }

      dispatchToReducer(action)
    }

    getAllCoursesPromise.then(fulfilled, reject)
  }

  return getAllCourses
}

const getCourseByIDAction = (token, courseID) => {
  const getCourseByID = (dispatchToReducer) => {
    const getCourseByIDPromise = getCourseByIDApi(token, courseID)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (user) => {
      let action 

      if(!user) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "GET_COURSE_BY_ID",
          payload: user
        }
      }

      dispatchToReducer(action)
    }

    getCourseByIDPromise.then(fulfilled, reject)
  }

  return getCourseByID
}


const createCourseAction = (token, course) => {
  const createCourse = (dispatchToReducer) => {
    const createCoursePromise = createCourseApi(token, course)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (course) => {
      let action 

      if(!course) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "CREATE_COURSE",
          payload: course
        }
      }

      dispatchToReducer(action)
    }

    createCoursePromise.then(fulfilled, reject)
  }

  return createCourse
}

const editCourseAction = (token, course) => {
  const editCourse = (dispatchToReducer) => {
    console.log(course)
    const editCoursePromise = updateCourseApi(token, course)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (course) => {
      let action 

      if(!course) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "UPDATE_COURSE",
          payload: course
        }
      }

      dispatchToReducer(action)
    }

    editCoursePromise.then(fulfilled, reject)
  }

  return editCourse
}

const deleteCourseAction = (token, course) => {
  const deleteCourse = (dispatchToReducer) => {
    const deleteCoursePromise = deleteCourseApi(token, course)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (course) => {
      let action 

      if(!course) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "DELETE_COURSE",
          payload: course
        }
      }

      dispatchToReducer(action)
    }

    deleteCoursePromise.then(fulfilled, reject)
  }

  return deleteCourse
}

// const deleteUserAction = (token, user) => {
//   const deleteUser = (dispatchToReducer) => {
//     const deleteUserPromise = deleteApplicationApi(token, user)
    
//     const reject = (error) => {
//       const action = {
//         type: "ERROR",
//         payload: error
//       }

//       dispatchToReducer(action)
//     }

//     const fulfilled = (user) => {
//       let action 

//       if(!user) {
//         action = {
//           type: "ERROR",
//           payload: 'Something went wrong...'
//         }
//       }
//       else {
//         action = {
//           type: "DELETE_USER",
//           payload: user
//         }
//       }

//       dispatchToReducer(action)
//     }

//     deleteUserPromise.then(fulfilled, reject)
//   }

//   return deleteUser
// }

export {
  getAllCoursesAction,
  getCourseByIDAction,
  createCourseAction,
  editCourseAction,
  deleteCourseAction
  // removeAllUsersAction,
  // updateUserAction,
  // createUserAction,
  // deleteUserAction
}