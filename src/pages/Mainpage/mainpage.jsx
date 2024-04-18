import React from 'react'
import styles from "./styles.module.scss";
import image1 from "../../../public/images/personlaptop1.png"
import Image from 'next/image';


const mainpage = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.vision}>Your Vision. <br/>Our Expertise.</h1>
        <h2 className={styles.h2}>Professional Web Design</h2>
        <div className={styles.imageContainer}>
        <Image className={styles.image} src={image1} alt="image" />
        
      </div>
        <button className={styles.btn}>Get Free Consultation</button>
        
    </div>
  )
}

export default mainpage