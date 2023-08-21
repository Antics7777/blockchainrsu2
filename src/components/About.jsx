import React from 'react'
import styles from '../style'
import { banner } from '../assets'
import { layout } from '../style'
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row rounded-[20px] p-6 ${index !== features.lenght - 1 ? 'mb-6' : 'mb-0 '} cursor-pointer bg-blue-800 feature-card`}>
    <div className={`w-[64px] h-[64px]  rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />

    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1'>{content}</p>
    </div>
  </div>
)

const About = () => {
  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-col justify-between items-center w-full'>
          <h2 className={`${styles.heading2}`}> About Us</h2>
        </div>
        {/* <h1 className={` w-full font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]  text-black`}> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our Platform serves as a central hub where you can access valuable resources, engage in meaningful discussion and connect with like minded individuals about Blockchain.
          Join us on shaping the future of Blockchain RSU Community
        </p>

      </div>

      <div className={`flex flex-col ${layout.sectionImg}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}


      </div>
    </section>
  )
}

export default About