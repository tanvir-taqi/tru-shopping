import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const SignUp = ({setLoginFrom,setPhoneLoginFrom}) => {

    const [errorMsg, setErrorMsg] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();




   
    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-[#0a0c1bfd] text-white w-full'>
                <h1 className="text-center font-bold text-2xl">Sign Up</h1>
                <form >


                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })}  className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })}  className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full"/>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="text" {...register("phone", {
                            required: true
                        })}  className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("img", {
                            required: "Image is Required"
                        })} className=" w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>



                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: true
                        })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>


                    <div className="flex flex-col my-3">
                        <label className="label"> <span className="label-text">Confirm Password</span></label>
                        <input type="password" {...register("confirm", {
                            required: true
                        })}  className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                        {errors.confirm && <p className='text-red-500'>{errors.confirm.message}</p>}
                    </div>
                    <p className='text-red-500 font-semibold'>{errorMsg}</p>

                    <input className='text-black font-bold text-lg bg-[#fd6a53] py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Sign Up" type="submit" />


                </form>
                <h4 className='my-4 text-2xl'>Login with phone Number? <button onClick={()=>setPhoneLoginFrom(true)} className='text-[#fd6a53]'>Click Here</button></h4>

                <h4>Already Have an Account? <button onClick={()=>setLoginFrom(true)}  className='text-[#fd6a53]'>Sign In</button></h4>
            </div>

        </div>
    );
};

export default SignUp;