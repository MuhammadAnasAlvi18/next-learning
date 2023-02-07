import Header from '@/components/Header';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const User = () => {

    const userData = useSelector((state) => state.contact.user);

    useEffect(()=>{
        console.log(userData);
    },[])

  return (
    <>
    <Header />
    <div className="mt-5 pt-5">
    <div className="container">
    <h5 className="text-center d-flex justify-content-center gap-2">First Name: <h6 className='m-0'>{userData ? userData.fname : "Data not Found"}</h6></h5>
    <h5 className="text-center d-flex justify-content-center gap-2">Last Name: <h6 className='m-0'>{userData ? userData.lname : "Data not Found"}</h6></h5>
    <h5 className="text-center d-flex justify-content-center gap-2">Email Address: <h6 className='m-0'>{userData ? userData.email : "Data not Found"}</h6></h5>
    <h5 className="text-center d-flex justify-content-center gap-2">Phone Number: <h6 className='m-0'>{userData ? userData.phone : "Data not Found"}</h6></h5>
    <p className="text-start d-flex justify-content-center align-items-start gap-2"><h5>Message:</h5> {userData ? userData.message : "Data not Found"}</p>
    </div>
    </div>
    </>
  )
}

export default User;