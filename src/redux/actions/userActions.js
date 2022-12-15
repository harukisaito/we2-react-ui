import { login as loginUserApi } from '../../api/userApi'

const loginUserAction = (userName, password) => {
  const authenticateUser = (dispatchToReducer) => {
    const loginPromise = loginUserApi(userName, password)
    
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
          payload: 'Wrong Credentials'
        }
      }
      else {
        action = {
          type: "AUTHENTICATE_USER",
          payload: user
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

export {
  loginUserAction,
  logoutUserAction,
  clearLoginModalErrorUserAction
}