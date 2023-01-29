import { getAllApplications as getAllApplicationsAPI } from './applicationApi'
import { createApplication as createApplicationApi } from './applicationApi'
import { deleteApplication as deleteApplicationApi } from './applicationApi'



const getAllApplicationsAction = (token) => {
  const getAllApplications = (dispatchToReducer) => {
    const getAllApplicationsPromise = getAllApplicationsAPI(token)
    
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
          type: "GET_ALL_APPLICATIONS",
          payload: users
        }
      }

      dispatchToReducer(action)
    }

    getAllApplicationsPromise.then(fulfilled, reject)
  }

  return getAllApplications
}

const createApplicationAction = (token, application) => {
  const createApplication = (dispatchToReducer) => {
    const createApplicationPromise = createApplicationApi(token, application)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (application) => {
      let action 

      if(!application) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "CREATE_APPLICATION",
          payload: application
        }
      }

      dispatchToReducer(action)
    }

    createApplicationPromise.then(fulfilled, reject)
  }

  return createApplication
}

const deleteApplicationAction = (token, application) => {
  const deleteAction = (dispatchToReducer) => {
    const deleteActionPromise = deleteApplicationApi(token, application)
    const reject = (error) => {
      const action = {
        type: "ERROR",
        payload: error
      }

      dispatchToReducer(action)
    }

    const fulfilled = (application) => {
      let action 

      if(!application) {
        action = {
          type: "ERROR",
          payload: 'Something went wrong...'
        }
      }
      else {
        action = {
          type: "DELETE_APPLICATION",
          payload: application
        }
      }

      dispatchToReducer(action)
    }

    deleteActionPromise.then(fulfilled, reject)
  }

  return deleteAction
}



export {
  getAllApplicationsAction,
  createApplicationAction,
  deleteApplicationAction,
}