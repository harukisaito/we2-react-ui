// const config = require("config")
import { Buffer } from 'buffer'


// const API_URL = config.get("api-url")
const API_URL = 'https://localhost:443/api'

const getAllCourses = async (token) => {
    const url = `${API_URL}/degreeCourses`
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


const getCourseByID = async (token, courseID) => {
    const url = `${API_URL}/degreeCourses/${courseID}`

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

const createCourse = async (token, course) => {
    const url = `${API_URL}/degreeCourses`
    const requestData = {
        method: 'POST',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            universityName: course.universityName,
            universityShortName: course.universityShortName,
            departmentName: course.departmentName,
            departmentShortName: course.departmentShortName,
            name: course.name,
            shortName: course.shortName
        })
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

const updateCourse = async (token, course) => {
    console.log(course)
    const url = `${API_URL}/degreeCourses/${course.id}`
    const requestData = {
        method: 'PUT',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            universityName: course.universityName,
            universityShortName: course.universityShortName,
            departmentName: course.departmentName,
            departmentShortName: course.departmentShortName,
            name: course.name,
            shortName: course.shortName
        })
    }
    
    const response = await fetch(url, requestData)
    if(!response.ok){
        return null
    }
    
    const json = await response.json()
    return json
}

const deleteCourse = async (token, course) => {
    const url = `${API_URL}/degreeCourses/${course.id}`
    const requestData = {
        method: 'DELETE',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
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
    getAllCourses,
    getCourseByID,
    createCourse,
    updateCourse,
    deleteCourse
}