import React, { useState } from 'react';
import Login from '../../component/Login/Login';
import SignUp from '../../component/SignUp/SignUp';
import joinImage from '../../assets/join-img.png'
import PhoneLogin from '../../component/PhoneLogin/PhoneLogin';

const Join = () => {
    const [loginForm, setLoginFrom] = useState(true)
    const [phoneLoginView, setPhoneLoginFrom] = useState(false)
    return (
        <div className=''>
            <div className='md:mx-auto md:px-16 p-2  mb-10  grid grid-cols-1  md:grid-cols-2 gap-6'>
                <div className='w-full flex justify-center items-center'>
                    <div>

                        <h1 className='text-2xl text-center font-bold'>Join TruShoppinG Now!!</h1>
                        <img src={joinImage} className='img-fluid' alt="" />
                    </div>
                </div>
                {
                    !phoneLoginView &&  <div>
                    {
                        loginForm ? <Login setLoginFrom={setLoginFrom} setPhoneLoginFrom={setPhoneLoginFrom}></Login> : <SignUp setLoginFrom={setLoginFrom} setPhoneLoginFrom={setPhoneLoginFrom}></SignUp>
                    }
                </div>
                }
                {
                    phoneLoginView && <PhoneLogin setPhoneLoginFrom={setPhoneLoginFrom}></PhoneLogin>
                }
               
            </div>
        </div>
    );
};

export default Join;