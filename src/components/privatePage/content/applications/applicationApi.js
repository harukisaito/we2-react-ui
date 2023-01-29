// const config = require("config")
import { Buffer } from 'buffer'


// const API_URL = config.get("api-url")
const API_URL = 'https://localhost:443/api'

const getAllApplications = async (token) => {
    const url = `${API_URL}/degreeCourseApplications`
    const requestData = {
        method: 'GET',
        headers: {
            Authorization: token,
        }
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

const createApplication = async (token, application) => {
    const url = `${API_URL}/degreeCourseApplications`
    const requestData = {
        method: 'POST',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            applicantUserID: application.applicantUserID,
            degreeCourseID: application.degreeCourseID,
            targetPeriodYear: application.targetPeriodYear,
            targetPeriodShortName: application.targetPeriodShortName
        })
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

const updateUser = async (token, user) => {
    const userID = user.userID
    const url = `${API_URL}/users/${userID}`
    const requestData = {
        method: 'PUT',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            isAdministrator: user.isAdmin
        })
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

const deleteApplication = async (token, application) => {
    const url = `${API_URL}/degreeCourseApplications/${application.id}`
    const requestData = {
        method: 'DELETE',
        headers: {
            Authorization: token
        }
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

export {
    getAllApplications,
    createApplication,
    updateUser,
    deleteApplication
}