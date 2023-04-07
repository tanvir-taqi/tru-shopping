import React, { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { AuthContext } from '../../userContext/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';


const PhoneLogin = ({ setPhoneLoginFrom }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [otpField, setOTPfield] = useState(false)
    const [confirmObj, setconfirmObj] = useState({})
    const { setUpRecaptcha } = useContext(AuthContext)
    const navigate = useNavigate()
     const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    // send the otp value to the phone number
    const getOtp = async (event) => {
        event.preventDefault()

        try {
            const res = await setUpRecaptcha(`+${phoneNumber}`)

            // store the response for confirmation
            setconfirmObj(res)
            setOTPfield(true)

        } catch (err) {
            setErrorMsg(err.message)
            console.error(err);
        }

    }

    // verify that otp with the response from the server
    const verifyOTP = async (event)=>{
        event.preventDefault()
        const otp = event.target.otp.value
        try{

            await confirmObj.confirm(otp)
            navigate(from, { replace: true });
            setOTPfield(false)
        }catch(err){
            setOTPfield(false)
            console.error(err);
            setErrorMsg(err.message)
        }
    }
    
    const handleResend =()=>{
        setOTPfield(false)

    }

    return (
        <div>
            <div className=" py-32 w-full flex justify-center">
                <div className='p-10 bg-[#0a0c1bfd] text-white w-full'>
                    <h1 className="text-center font-bold text-2xl">Sign In</h1>
                    {errorMsg}
                    <form onSubmit={getOtp} className={`${otpField ? 'hidden':'block'}`}>
                        <div className='flex flex-col my-3 p-2 text-black outline-none duration-500 w-2/3 focus:w-full'>
                            <label htmlFor="number" className='font-bold text-white'>Phone Number</label>
                            <PhoneInput
                                country='bd'
                                value={phoneNumber}
                                onChange={(phone) => setPhoneNumber(phone.replace(/\D/g, ''))}
                            />
                        </div>
                        <div id='recaptcha-container'></div>

                        <input type="submit" className='text-black font-bold text-lg bg-[#fd6a53] py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Send OTP" />
                    </form>
                    <form onSubmit={verifyOTP} className={`${otpField ? 'block':'hidden'}`}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="otp" className='font-bold'>OTP</label>
                        <input type="text" name="otp" autoFocus id="otp" placeholder="" className="p-2 text-black outline-none  w-1/3" />
                    </div>
                    
                    <p className='text-red-500 font-semibold'>{errorMsg}</p>
                    <input type="submit" className='text-black font-bold text-lg bg-[#fd6a53] py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Verify OTP" />
                    <button onClick={handleResend} className='text-black font-bold text-lg bg-[#302e2d] py-2 px-4 rounded-3xl my-3 cursor-pointer'>Resend</button>
                </form>
                    <h4 className='my-4 text-2xl'>Login with Email? <button onClick={() => setPhoneLoginFrom(false)} className='text-[#fd6a53]'>Click Here</button></h4>
                </div>

            </div>
        </div>
    );
};

export default PhoneLogin;