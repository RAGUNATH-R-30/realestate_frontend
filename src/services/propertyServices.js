import { instance } from "./instances"

const propertyServices = {
    createProperty: async (values) => {
        return await instance.post('/property/createproperty', values)
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
    }
}

export default propertyServices