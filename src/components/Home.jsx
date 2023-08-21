import React from 'react'
import styles from '../style'
import {
  About,
  Footer,
  Members,
  News,
  NewsLetter,
  Patners,
  Projects,
  Testimonials,
  Update,
  Navbar,
  Hero
} from './'

const Home = () => {
  return (
    <div className='w-full overflow-hidden '>
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div> */}

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />

        </div>

      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          {/* <Update/> */}
          {/* <News/> */}
          <Testimonials />
          <Patners />
          {/* <Members/> */}
          <Projects />
          <NewsLetter />
          <Footer />

        </div>

      </div>
    </div>


  )
}

export default Home