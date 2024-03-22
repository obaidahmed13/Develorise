import React from 'react'
import styles from "./styles.module.scss";


const mainpage = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.vision}>Your Vision. <br/>Our Expertise.</h1>
        <h2 className={styles.h2}>Professional Web Design</h2>
        <div className={styles.imageContainer}>
        <img className={styles.image} src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </div>
        <button className={styles.btn}>Get Free Consultation</button>
        
    </div>
  )
}

export default mainpage