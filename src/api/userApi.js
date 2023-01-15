// const config = require("config")
import { Buffer } from 'buffer'


// const API_URL = config.get("api-url")
const API_URL = 'https://localhost:443/api'

const login = async (userName, password) => {
    const getAuthHeader = (userName, password) => {
        const data = `${userName}:${password}` // usermail:password
        const encodedData = Buffer.from(data, 'ascii').toString('base64')
        const authString = `Basic ${encodedData}`
    
        return authString
    }

    const authHeader = getAuthHeader(userName, password)
    const url = `${API_URL}/authenticate`
    const requestData = {
        method: 'GET', 
        headers: {
            Authorization: authHeader,
        }
    }
    
    const response = await fetch(url, requestData)

    const user = await response.json()
    const token = response.headers.get('Authorization')

    return {user, token}
}

const getAllUsers = async (token) => {
    const url = `${API_URL}/users`
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

const createUser = async (token, user) => {
    const url = `${API_URL}/users`
    const requestData = {
        method: 'POST',
        headers: {
            Authorization: token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            userID: user.userID,
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

const deleteUser = async (token, user) => {
    const userID = user.userID
    const url = `${API_URL}/users/${userID}`
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
    login,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}