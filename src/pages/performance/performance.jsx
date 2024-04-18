import React from 'react'
import styles from "./styles.module.scss";
import Image from 'next/image';
import imagecard from "../../../public/images/imagecard2.jpg"

const performance = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerw}>
        <div className={styles.leftside}>
        <h1 className={styles.h1}>Stand Out From the Crowd:</h1>
        <h1 className={styles.h2}>Have a Website That Converts.</h1>
        <p>Struggling to be seen online? We'll make you impossible to miss.. <br/>We craft websites that not only look stunning, but also <br/>outperform the competition.</p>
        </div>
        <div >
          <Image src={imagecard} alt='image' className={styles.image}/>
        </div>
        </div>
        <div className={styles.top}>
        <div className={styles.container2}>
          <div className={styles.scroll}>
            <div className={styles.RightToLeft}>
              <p>Don't settle for average    <span>   •</span></p>
              <p>Let's build a website that sets you apart    <span>   •</span></p>
              <p>Contact us today for a free consultation!  <span>   •</span></p>
              <p>Custom Websites    <span>   •</span></p>
              <p>Software Solutions    <span>   •</span></p>
              <p>Shopify Store <span>   •</span></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default performance