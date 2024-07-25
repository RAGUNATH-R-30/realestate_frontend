import React from 'react'
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { HiLogin, HiLogout, HiOutlineInformationCircle, HiOutlineLogin, HiOutlineUser, HiStop, HiUserCircle } from 'react-icons/hi';
import { HiArrowTopRightOnSquare, HiBuildingLibrary, HiBuildingStorefront, HiDocumentArrowUp, HiOutlineArrowTopRightOnSquare, HiUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
function CustomNavbar() {
    const navigate = useNavigate()
    return (
        <Navbar fluid rounded>
            <Navbar.Brand onClick={() => navigate('/dashboard')}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">RE_Agent</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Button color={'blue'} pill onClick={()=>{
                    navigate('/newproperty')
                }}>
                    <HiOutlineInformationCircle className='w-5 h-5 mr-1' />
                    Post New Property
                </Button>

                <Dropdown inline label={<Avatar rounded bordered />} className='p-3'>


                    <Dropdown.Item onClick={() => navigate('/myproperty')}>
                        <HiBuildingStorefront className='w-4 h-4 mr-2' />
                        My Properties
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item >
                        <HiLogout className='w-4 h-4 mr-2' />
                        Sign Out
                    </Dropdown.Item>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar