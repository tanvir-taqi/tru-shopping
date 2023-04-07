
import React, { useContext, useEffect, useState } from 'react';
import { BiBullseye, BiSleepy } from 'react-icons/bi';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = ({setLoginFrom,setPhoneLoginFrom}) => {
   
    const [showPass, setShowPass] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')



    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-[#0a0c1bfd] text-white w-full'>
                <h1 className="text-center font-bold text-2xl">Sign In</h1>
                <form >
                    <div className='flex flex-col my-3'>
                        <label htmlFor="number" className='font-bold'>Phone Number</label>
                        <input type="text" name="number" id="number" placeholder="Phone Number" className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="password" className='font-bold'>Password</label>
                            <span onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ?
                                        <BiSleepy className='text-red-600'></BiSleepy>
                                        :
                                        <BiBullseye className='text-stone-600' ></BiBullseye>

                                }
                            </span>
                        </div>
                        <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                    </div>
                    <p className='text-red-500 font-semibold'>{errorMsg}</p>

                    <input type="submit" className='text-black font-bold text-lg bg-[#fd6a53] py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Sign In" />
                </form>
                <h4 className='my-4 text-2xl'>Login with phone Number? <button onClick={()=>setPhoneLoginFrom(true)} className='text-[#fd6a53]'>Click Here</button></h4>
                <h4>New to <strong>TruShopping?</strong> <button onClick={()=>setLoginFrom(false)} className='text-[#fd6a53]'>Create Account</button></h4>
            </div>

        </div>
    );
};

export default Login;