import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import { subscribe } from '../assets'

const NewsLetter = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className=''>
        <h2 className={`${styles.heading2}`}> Subscribe to our newsletter</h2>
        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5  `}>
            Sign up for our newsletter to get the latest updates on our products and services.
          </p>
          <div className='mt-8 flex flex-col'>
            <div className='flex flex-col mb-5'>
              <p className='text-[20px] text-black font-bold leading-[27px] mb-2 '> Name </p>
              <input type="text" className='py-3 p-3 px-10 border-[1px] rounded-[10px] focus:outline-none font-poppins text-black text-bold text-[20px] border-blue-900' />
            </div>
            <div className='flex flex-col mb-10'>
              <p className='text-[20px] text-black font-bold leading-[27px] mb-2 '> Email </p>
              <input type="email" className='py-3 p-3 px-10 border-[1px] rounded-[10px] focus:outline-none font-poppins text-black text-bold text-[20px] border-blue-900' />
            </div>
            <button className='py-3 p-3 px-10 border-[1px] rounded-[10px] text-[20px] font-poppins bg-blue-900 text-white'>Subscribe</button>
            </div>
        </div>
      </div>
      <div >
       <img src={subscribe} alt="subscribe" className='w-[100%] h-[100%] relative z-[5] object-contain ' />
      </div>
    </section>
  )
}

export default NewsLetter