import { instance } from "./instances"

const propertyServices = {
    createProperty: async (values) => {
        return await instance.post('/property/createproperty', values)
    },
    retriveAllProperty:async()=>{
        return await instance.get('/property/allproperty')
    },
    filterProperty:async(values)=>{
        return await instance.post('/property/propertyfilter',values)
    },
    myProperty: async () => {
        try {
            const response = await instance.get('/property/myproperty');
            if(response) {
                
                return response.data;
            }
        }
        catch(err) {
            throw err;
        }
    },
    getPropertybyid:async(id)=>{
        try {
            const response = await instance.get(`/property/mypropertyid/${id}`);
            if(response) {
                
                return response.data;
            }
        }
        catch(err) {
            throw err;
        }
    }
    // myProperty:async()=>{
    //     return await instance.get('/property/myproperty')
    // }
}

export default propertyServices