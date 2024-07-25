import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import React from 'react'
import CustomNavbar from './CustomNavbar'
import { useFormik } from 'formik'
import propertyServices from '../services/propertyServices'
import { showToast } from './ToastManager'
import { Navigate, useNavigate } from 'react-router-dom'

function NewProperty() {

    const navigate = useNavigate()
    const locations = [
        {
            "districtName": "Ariyalur"
        },
        {
            "districtName": "Chennai"
        },
        {
            "districtName": "Coimbatore"
        },
        {
            "districtName": "Cuddalore"
        },
        {
            "districtName": "Dharmapuri"
        },
        {
            "districtName": "Dindigul"
        },
        {
            "districtName": "Erode"
        },
        {
            "districtName": "Kallakurichi"
        },
        {
            "districtName": "Kanchipuram"
        },
        {
            "districtName": "Kanniyakumari"
        },
        {
            "districtName": "Karur"
        },
        {
            "districtName": "Krishnagiri"
        },
        {
            "districtName": "Madurai"
        },
        {
            "districtName": "Nagapattinam"
        },
        {
            "districtName": "Namakkal"
        },
        {
            "districtName": "Nilgiris"
        },
        {
            "districtName": "Perambalur"
        },
        {
            "districtName": "Pudukkottai"
        },
        {
            "districtName": "Ramanathapuram"
        },
        {
            "districtName": "Salem"
        },
        {
            "districtName": "Sivaganga"
        },
        {
            "districtName": "Thanjavur"
        },
        {
            "districtName": "Theni"
        },
        {
            "districtName": "Thoothukudi"
        },
        {
            "districtName": "Tiruchirappalli"
        },
        {
            "districtName": "Tirunelveli"
        },
        {
            "districtName": "Tiruppur"
        },
        {
            "districtName": "Tiruvallur"
        },
        {
            "districtName": "Tiruvannamalai"
        },
        {
            "districtName": "Tiruvarur"
        },
        {
            "districtName": "Vellore"
        },
        {
            "districtName": "Viluppuram"
        },
        {
            "districtName": "Virudhunagar"
        }
    ]

    const property_type = [
        'House', 'Apartment', 'Land'
    ]
    const formik = useFormik({
        initialValues: {
            location: '',
            property_type: '',
            description: '',
            price: ''
        },
        validate: (values) => {
            let error = {}
            // if (values.location.length == 0) {
            //     error.location = "Enter the location"
            // }
            // if (values.propertytype.length == 0) {
            //     error.propertytype = "Enter the Property Type"
            // }
            // if (values.description.length == 0) {
            //     error.description = "Enter the Description"
            // }
            // if (values.price.length) {
            //     error.price = "Enter the Price"
            // }
            // return error
        },
        onSubmit: (values) => {
            propertyServices.createProperty(values).then((response) => {
                showToast(response.data.message)
                navigate('/myproperty')
            }).catch((error) => {
                showToast(error.response.data.message)

            })
        }
    })
    return (
        <>
            <CustomNavbar />
            <div className='max-w-[1000px] mx-auto my-5'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-[600] text-xl'>New Property</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <Card className='p-5'>
                            <div className='flex justify-between gap-4 flex-wrap'>
                                <div>
                                    <Label>Property Type</Label>
                                    {/* <TextInput color={'blue'} size={'sm'} className='w-[280px]' value={''} /> */}
                                    <Select
                                        name='property_type'
                                        id="property_type"
                                        className='w-[280px]'
                                        value={formik.values.property_type}
                                        onChange={formik.handleChange}
                                    >
                                        <option value='' defaultValue disabled>Choose Location</option>
                                        {
                                            property_type?.map((type, idx) => <option key={idx}>{type}</option>)
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <Label>Location</Label>
                                    {/* <TextInput color={'blue'} size={'sm'}  className='w-[280px]' value={''} /> */}
                                    <Select
                                        name='location'
                                        id="location"
                                        className='w-[280px]'
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                    >
                                        <option value='' defaultValue disabled>Choose Location</option>
                                        {
                                            locations?.map((location, idx) => <option key={idx}>{location?.districtName}</option>)
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <Label>Description</Label>
                                    <TextInput color={'blue'} size={'sm'} className='w-[280px]' name='description' value={formik.values.description} onChange={formik.handleChange} />
                                </div>
                                <div>
                                    <Label>Price</Label>
                                    <TextInput color={'blue'} size={'sm'} className='w-[280px]' name='price' value={formik.values.price} onChange={formik.handleChange} />
                                </div>
                            </div>
                            <Button type='submit' color="blue" className='w-[100px]'  >Submit</Button>

                        </Card>
                    </form>

                </div>
            </div>

        </>
    )
}

export default NewProperty