import React from 'react'
import styles from '../style'
import { banner } from '../assets'

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className={`flex font-poppins font-bold ss:text-[72px] text-[52px] text-[#003399] ss:leading-[100px] leading-[75px]`}> Welcome to <br />
          Block Chain Rsu </h1>

      </div>
      {/* <h1 className={` w-full font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]  text-black`}> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our Platform serves as a central hub where you can access valuable resources, engage in meaningful discussion and connect with like minded individuals about Blockchain.
        Join us on shaping the future of Blockchain RSU Community
      </p>

    </div>

    <div>
      <img src={banner} alt="banner" className='w-[100%] h-[100%] relative z-[5] object-contain ' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'>

      </div>
    </div>
  </section>
)

export default Hero