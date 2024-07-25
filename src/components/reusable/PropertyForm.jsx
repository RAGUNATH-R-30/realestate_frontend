import { Label, Select, TextInput } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import propertyServices from '../../services/propertyServices';

export default function PropertyForm({
    formik,
    property_type,
    locations
}) {
  
    return (
        <>
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
        </>
    )
}
