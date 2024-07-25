import { Button, Card } from 'flowbite-react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { showToast } from './ToastManager';
import PropertyForm from './reusable/PropertyForm';
import CustomNavbar from './CustomNavbar';
import propertyServices from '../services/propertyServices';

export default function UpdateProperty() {
    const { id } = useParams();
    const navigate = useNavigate()

    const [myProperty, setMyProperty] = useState([]);


    const getPropertyData = async (id) => {
        try {
            const response = await propertyServices.getPropertybyid(id);
            if (response) {
                console.log(response.myproperty[0])
                setMyProperty(response.myproperty[0]);
            }
        }
        catch (err) {
            alert(err.message);
        }
    }
    useEffect(() => {
        getPropertyData(id)
    }, [])

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
        enableReinitialize: true,
        onSubmit: (values) => {
            propertyServices.updateProperty(id, values).then((response) => {
                showToast(response.message)
                navigate('/myproperty')
            }).catch((error) => {
                showToast(error.response.data.message)

            })
        }
    })

    useEffect(() => {
        if (myProperty) {
            formik.setValues({
                location: myProperty.location,
                property_type: myProperty.property_type,
                description: myProperty.description,
                price: myProperty.price
            });
        }
    }, [myProperty])
    return (
        <>
            <CustomNavbar />
            <div className='max-w-[1000px] mx-auto my-5 mt-20'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-[600] text-xl'>Update Property</h1>
                            <Button type='submit' color="blue" className='w-[100px]'>Update</Button>

                        </div>
                        <Card className='p-5'>
                            <div className='flex justify-between gap-4 flex-wrap'>
                                <PropertyForm
                                    type='update'
                                    formik={formik}
                                    locations={locations}
                                    property_type={property_type}
                                />
                            </div>
                        </Card>

                    </div>
                </form>
            </div>
        </>
    )
}
