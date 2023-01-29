import { login as loginAPI } from './userApi'
import { getAllUsers as getAllUsersAPI } from './userApi'
import { updateUser as updateUserAPI } from './userApi'
import { createUser as createUserAPI } from './userApi'
import { deleteUser as deleteUserAPI } from './userApi'

const loginUserAction = (userName, password) => {
  const authenticateUser = (dispatchToReducer) => {
    const loginPromise = loginAPI(userName, password)
    
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (response) => {
      let action 

      if(!response) {
        action = {
          type: "ERROR",
          payload: 'Wrong Credentials'
        }
      }
      else {

        action = {
          type: "AUTHENTICATE_USER",
          payload: response
        }
      }

      dispatchToReducer(action)
    }

    loginPromise.then(fulfilled, reject)
  }

  return authenticateUser
}

const logoutUserAction = () => {
  const authenticateUser = (dispatchToReducer) => {
    const action = {
      type: "UNAUTHENTICATE_USER",
      payload: null
    }

    dispatchToReducer(action)
  }

  return authenticateUser
}

const clearLoginModalErrorUserAction = () => {
  const clearLoginModalError = (dispatchToReducer) => {
    const action = {
      type: "ERROR",
      payload: null
    }

    dispatchToReducer(action)
  }

  return clearLoginModalError
}

const getAllUsersAction = (token) => {
  const getAllUsers = (dispatchToReducer) => {
    const getAllUsersPromise = getAllUsersAPI(token)
    
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
          type: "GET_ALL_USERS",
          payload: users
        }
      }

      dispatchToReducer(action)
    }

    getAllUsersPromise.then(fulfilled, reject)
  }

  return getAllUsers
}

const removeAllUsersAction = () => {
  const removeUsers = (dispatchToReducer) => {
    const action = {
      type: "REMOVE_ALL_USERS",
      payload: null
    }

    dispatchToReducer(action)
  }

  return removeUsers
}

const updateUserAction = (token, user) => {
  const updateUser = (dispatchToReducer) => {
    const updateUserPromise = updateUserAPI(token, user)
    
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
          type: "UPDATE_USER",
          payload: user
        }
      }
      
      dispatchToReducer(action)
    }

    updateUserPromise.then(fulfilled, reject)
  }

  return updateUser
}

const createUserAction = (token, user) => {
  const createUser = (dispatchToReducer) => {
    const createUserPromise = createUserAPI(token, user)
    
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
          type: "CREATE_USER",
          payload: user
        }
      }

      dispatchToReducer(action)
    }

    createUserPromise.then(fulfilled, reject)
  }

  return createUser
}

const deleteUserAction = (token, user) => {
  const deleteUser = (dispatchToReducer) => {
    const deleteUserPromise = deleteUserAPI(token, user)
    
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
          type: "DELETE_USER",
          payload: user
        }
      }

      dispatchToReducer(action)
    }

    deleteUserPromise.then(fulfilled, reject)
  }

  return deleteUser
}

export {
  loginUserAction,
  logoutUserAction,
  clearLoginModalErrorUserAction,
  getAllUsersAction,
  removeAllUsersAction,
  updateUserAction,
  createUserAction,
  deleteUserAction
}