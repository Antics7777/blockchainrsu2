import React from 'react'
import styles from '../style'

const Projects = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col '>
      <h2 className={`${styles.heading2b}`}> Join Blockchain Rsu Today!</h2>
      <p className={`${styles.paragraph2} max-w-[470px] mt-5`}> Our Platform serves as a central hub where you can access valuable resources about the  Blockchain.
        Join us on shaping the future of Blockchain RSU Community</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button className="p-6 py-5 px-9 font-semibold bg-white rounded-lg bg-blue-gradient">Get Started</button>
    </div>
  </section>
)

export default Projects