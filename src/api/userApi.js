// const config = require("config")
import { Buffer } from 'buffer'


// const API_URL = config.get("api-url")
const API_URL = 'https://localhost:443/api'

const login = async (userName, password) => {
    const encodeLoginData = (userName, password) => {
        const data = `${userName}:${password}` // usermail:password
        const encodedData = Buffer.from(data, 'ascii').toString('base64')
        return encodedData
    }

    const encodedData = encodeLoginData(userName, password)
    const authString = `Basic ${encodedData}`
    const url = `${API_URL}/authenticate`
    const requestData = {
        method: 'GET', 
        headers: {
            Authorization: authString,
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
    login
}