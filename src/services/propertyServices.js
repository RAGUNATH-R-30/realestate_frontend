import { instance } from "./instances"

const propertyServices = {
    createProperty:async(values)=>{
return await instance.post('/property/createproperty',values)
    }
}

export default propertyServices