import React from 'react';
import { Button, Card } from 'flowbite-react';
import { HiMapPin } from 'react-icons/hi2';

import { FiDelete, FiEdit, FiTrash } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { showToast } from '../ToastManager';
import userServices from '../../services/userServices';
import propertyServices from '../../services/propertyServices';




const PropertyCard = ({ id, propertyType, location, description, price, type }) => {
    const navigate = useNavigate();



    const handleDelete = async (id) => {
        try {
            const resposne = await propertyServices.deleteProperty(id);
            showToast(resposne.message, 'success')
            navigate('/myproperty');
        }
        catch (error) {
            showToast(error.message, 'error');
        }
    }

    return (
        <Card className="w-[400px] bg-white shadow-lg rounded-lg ">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/500"
                alt="Property"
            />
            <div className="p-3">
                <table className="mb-4 w-full text-left text-gray-900 dark:text-gray-300">
                    <tbody>
                        <tr className='w-full'>
                            <td className=" border border-gray-200 dark:border-gray-700 p-3">
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='flex items-center gap-1 text-center font-semibold'>
                                        {propertyType}
                                    </h1>
                                    <small className='text-center'>Property Type</small>

                                </div>
                            </td>
                            <td className=" border border-gray-200 dark:border-gray-700 p-3">
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-center font-semibold flex items-center gap-1'>
                                        <HiMapPin className='text-red-400' />
                                        {location}
                                    </h1>
                                    <small className='text-center'>Location</small>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className=" border border-gray-200 dark:border-gray-700 p-3">
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className=' flex items-center gap-1 text-center font-semibold'>
                                        {description}
                                    </h1>
                                    <small className='text-center'>Description</small>

                                </div>
                            </td>
                            <td className=" border border-gray-200 dark:border-gray-700 p-3">
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-center font-semibold'>

                                        $ {price}
                                    </h1>
                                    <small className='text-center'>Price</small>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                {
                    type === "agentCard" && (
                        <div className='flex flex-col justify-center items-center gap-1 mt-5'>
                            <button
                                type="button"
                                class="w-full flex justify-center items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                onClick={() => navigate(`/myproperty/${id}`)}
                            >
                                <FiEdit className='w-4 h-4' />
                                Edit
                            </button>
                            <button
                                type="button"
                                class="w-full flex justify-center items-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={handleDelete}
                            >
                                <FiTrash className='w-4 h-4' />
                                Delete
                            </button>
                        </div>
                    )
                }

            </div>
        </Card>
    );
};

export default PropertyCard;
