import React from 'react'
import styles from '../style'
import { blc, googlepn } from '../assets'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function loginsubmit (e) {
    e.preventDefault();
    const responce = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await responce.json()
    if(data.user){
      alert('Login successful')
      window.location.href = './dashboard'
    }else{
      alert('Login failed')
    }
    console.log(data)

  };




  return (
    <section className='bg-blue-900 w-full h-screen'>
      <div className='justify-center items-center flex flex-col'>
        <div className='mb-10 flex flex-row'>
          <img src={blc} alt="blc" className="w-[60px]  h-[50px] mt-3" />
          <p className={`font-poppins md:text-[25px] text-[20px] flex mt-5 font-bold text-white `}> Blockchain Club Rsu</p>
        </div>
        <div className='bg-white p-5 pl-10 pr-10 items-center max-w-[430px] m-5'>
          <form className='flex-col flex' onSubmit={loginsubmit}>
            <p className='font-poppins text-2xl font-normal text-center text-[#5c5c5b] mb-5'> LOGIN </p>
            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='py-3 px-4 border-[1px] mt-5 focus:outline-none font-poppins text-black font-normal text-[15px] border-[#dee5e7]' placeholder='Email Address' />
            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className='py-3 pr-[150px] px-4 mt-5 border-[1px] focus:outline-none font-poppins text-black text-[15px] border-[#dee5e7]' placeholder='Password' />
            <button type='submit' className='bg-blue-800 rounded-md mt-5 p-3 flex items-center relative justify-center font-poppins font-normal text-[15px] text-white'>Login to your account </button>
            {/* <GoogleLogin
              clientId='159680612290-65t8mbidrdj1j44u66fpgergarglqe99.apps.googleusercontent.com'
              render={(renderProps) => (
                <button className='bg-blue-800 rounded-md mt-5 p-3 flex items-center relative justify-center font-poppins font-normal text-[15px] text-white' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src={googlepn} alt="google" className='w-[20px] h-[20px] mr-3 ' />
                  Google Sign in
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            /> */}
          </form>
        </div>
        <div className='flex flex-row'>
          <p className='text-gray-200 text-[15px] font-poppins'> Don't have an Account? </p>
          <p className='text-white text-[15px] ml-2 font-poppins'> <Link to={"/signup"}> Sign Up </Link></p>
        </div>
        <p className='text-white text-[15px] font-poppins'> Forgot your password? </p>
      </div>
    </section>
  )
}

export default Login;
