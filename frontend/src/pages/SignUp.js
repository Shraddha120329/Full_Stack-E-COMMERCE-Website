import React from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imageTobase64 from '../helpers/ImageToBase64';
import SummaryApi from '../common/index';
import { toast } from 'react-toastify';



const SignUp = () => {

  const [showPassword,setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [data,setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : "",
        profilePic : ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const {name , value} = e.target

        setData((previous) => {
            return {
                ...previous,
                [name] : value
            }
        })
    } 

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(data.password === data.confirmPassword){
          const dataResponse = await fetch(SummaryApi.signUP.url,{
            method : SummaryApi.signUP.method,
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }
        }else{
          toast.error("Please check confirm password")
        }


    }

    const handleUploadImg = async(e) => {
      const file = e.target.files[0]
      const imagePic = await imageTobase64(file)
      setData((previous)=>{
        return{
          ...previous,
          profilePic : imagePic
        }
      })
    }


  console.log('data login',data)

  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>
        <div className='bg-white p-5 w-full max-w-sm mx-auto'>
           <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
              <div>
                <img src={data.profilePic || loginIcons} alt='login icon'/>
              </div>
              <form>
                <label>
                  <div className='text-xs bg-opacity-80 cursor-pointer bg-slate-200 py-4 px-1 text-center absolute bottom-0 w-full pb-4 pt-2'>
                    Upload Image
                  </div>
                  <input type='file' className='hidden' onChange={handleUploadImg}/>
                </label>
              </form>
           </div>

           <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
                    <label>Name : </label>
                    <div className='bg-slate-100 p-2'>
                        <input 
                        type='text' 
                        placeholder='enter your name' 
                        name='name'
                        value={data.name}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='grid'>
                    <label>Email : </label>
                    <div className='bg-slate-100 p-2'>
                        <input 
                        type='email' 
                        placeholder='enter email' 
                        name='email'
                        value={data.email}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>

                <div>
                    <label>Password : </label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder='enter password' 
                        name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl' onClick={() => setShowPassword((previous) => !previous)}>
                            <span>
                                {
                                    showPassword ? (
                                    <FaEye/>
                                    )
                                    :
                                    (
                                       <FaEyeSlash/>
                                    )
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <label> Confirm Password : </label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder='enter confirm password' 
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((previous) => !previous)}>
                            <span>
                                {
                                    showConfirmPassword ? (
                                    <FaEye/>
                                    )
                                    :
                                    (
                                       <FaEyeSlash/>
                                    )
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <button className='bg-blue-500 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-blue-700'>Sign Up</button>
           </form>

           <p className= 'my-5'>Already have an account ? <Link to={'/login'} className=' text-blue-500 hover:text-blue-700 hover:underline'>Login </Link></p>
        </div>
    </div>
</section>
  )
}

export default SignUp