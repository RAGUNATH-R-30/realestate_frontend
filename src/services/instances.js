import axios from "axios"

const baseURL = 'https://realestate-api-unse.onrender.com/api'
// const baseURL = 'http://localhost:3001/api'

export const instance = axios.create({
    baseURL:baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})