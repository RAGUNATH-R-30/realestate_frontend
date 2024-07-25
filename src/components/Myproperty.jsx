import React, { useEffect, useState } from 'react'
import CustomNavbar from './CustomNavbar'
import PropertyCard from './reusable/PropertyCard'
import propertyServices from '../services/propertyServices'

function Myproperty() {
  const [myProperty, setMyProperty] = useState([]);

  const getMyProperty = async () => {
    try {
      const response = await propertyServices.myProperty();
      if (response) {
        setMyProperty(response.myproperty);
      }
    }
    catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    getMyProperty();
  }, [])

  return (
    <>
      <CustomNavbar />
      <div className=' flex justify-center items-center gap-3'>
        {
          myProperty?.length === 0
            ? <p className='flex justify-center items-center font-bold'>No properties found</p> :

            myProperty?.map(prop => (
              <PropertyCard
                key={prop._id}
                id={prop._id}
                propertyType={prop.property_type}
                location={prop.location}
                description={prop.description}
                price={prop.price}
                type='agentCard'
                getMyProperty={getMyProperty}
              />
            ))
        }

      </div>

    </>
  )
}

export default Myproperty