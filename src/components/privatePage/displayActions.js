const displayUserManagementAction = () => {
  const displayUserManagement = (dispatchToReducer) => {
    const action = {
      type: "DISPLAY_USER_MANAGEMENT",
      payload: "userManagement"
    }

    dispatchToReducer(action)
  }

  return displayUserManagement
}

const displayApplicationsAction = () => {
  const displayApplications = (dispatchToReducer) => {
    const action = {
      type: "DISPLAY_APPLICATIONS",
      payload: "applications"
    }

    dispatchToReducer(action)
  }

  return displayApplications
}

const displayCoursesAction = () => {
  const displayCourses = (dispatchToReducer) => {
    const action = {
      type: "DISPLAY_COURSES",
      payload: "courses"
    }

    dispatchToReducer(action)
  }

  return displayCourses
}

const displayHomeAction = () => {
  const displayHome = (dispatchToReducer) => {
    const action = {
      type: "DISPLAY_HOME",
      payload: "home"
    }

    dispatchToReducer(action)
  }

  return displayHome
}


export {
  displayUserManagementAction,
  displayApplicationsAction,
  displayCoursesAction,
  displayHomeAction
}