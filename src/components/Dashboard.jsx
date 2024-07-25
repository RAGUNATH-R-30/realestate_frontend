import React, { useEffect, useState } from 'react'
import CustomNavbar from './CustomNavbar'
import propertyServices from '../services/propertyServices'
import { showToast } from './ToastManager'
import { Button, Drawer, Label, Select, Sidebar, TextInput } from 'flowbite-react'
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";


import { CiFilter } from "react-icons/ci";
import { useFormik } from 'formik'
import PropertyCard from './reusable/PropertyCard'

function Dashboard() {
    const [properties, setProperty] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

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
            console.log(values)
            propertyServices.filterProperty(values).then((response) => {
                setProperty(response.data.filteredProperties)
                console.log(response.data.filteredProperties)
            }).catch((error) => {
                showToast(error.response.data.message)
            })
        }
    })


    const propertyData = () => {
        propertyServices.retriveAllProperty().then((response) => {
            console.log(response.data.allProperties)
            setProperty(response.data.allProperties)
        }).catch((error) => {
            showToast(error.response.data.message)
        })
    }
    useEffect(() => {
        propertyData()
    }, [])
    return (
        <>
            <CustomNavbar />

            <div className='flex justify-end'>
                <Button color="blue" outline pill onClick={() => setIsOpen(true)}><CiFilter />
                </Button>
            </div>

            {
                properties.map((item, index) => {
                    // console.log(item)
                    return <PropertyCard key={index} id={item._id} propertyType={item.property_type} location={item.loaction} price={item.price} description={item.description} />

                })
            }


            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Filter" titleIcon={() => <></>} />
                <Drawer.Items>


                    <div>
                        <form className="pb-3 " onSubmit={formik.handleSubmit}>

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
                                <Label>Price</Label>
                                <TextInput color={'blue'} size={'sm'} className='w-[280px]' name='price' value={formik.values.price} onChange={formik.handleChange} />
                            </div>

                            <div className='flex justify-between mt-5'>

                                <Button type='' color="gray" className='' onClick={() => { propertyData() }}  >Clear Filter</Button>
                                <Button type='submit' color="blue" className=''  >Apply Filter</Button>
                            </div>

                        </form>
                    </div>

                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default Dashboard