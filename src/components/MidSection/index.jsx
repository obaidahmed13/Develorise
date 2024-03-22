import React from 'react';
import styles from "./styles.module.scss";
import Nav from '../Nav/Nav';

const Index = () => {
  return (
    <div className={styles.midsection}>
      <div className={styles.nav}>
        <Nav className={styles.navba}/>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </div>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.scroll}>
            <div className={styles.RightToLeft}>
              <p>Custom Websites    <span>   •</span></p>
              <p>Software Solutions    <span>   •</span></p>
              <p>Shopify Store <span>   •</span></p>
              <p>Custom Websites    <span>   •</span></p>
              <p>Software Solutions    <span>   •</span></p>
              <p>Shopify Store <span>   •</span></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
