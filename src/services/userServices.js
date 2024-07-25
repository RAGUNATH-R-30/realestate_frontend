import { instance } from "./instances"

const userServices = {
    login:async(email,password)=>{
        return await instance.post('/users/login',{email,password},{ withCredentials: true })
    },
    register:async(username,email,password)=>{
        return await instance.post('/users/register',{username,email,password},{ withCredentials: true })
    }
}
export default userServices