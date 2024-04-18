import React from 'react'
import styles from "./styles.module.scss";
import Image from 'next/image';
import imagecard from "../../../public/images/imagecard2.jpg"


const standout = () => {
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
        
    </div>
  )
}

export default standout