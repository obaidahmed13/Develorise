import React from 'react'
import styles from "./styles.module.scss";
import Link from 'next/link';
import logo from "../../../public/images/Develorise.png"
import Image from 'next/image';

const Nav = () => {
  return (
    <div class={styles.navbar}>
     
            <Image class={styles.leftbar} src={logo} alt='logo'/>
           
           
            <div class={styles.rightnav} >
            <Link href="/getStarted" className={styles.getStarted}>Get Started Here</Link>
            <Link href="/about">Our Work</Link>
            <Link href="/about">Contact Us</Link>
            </div>
        </div>
  )
}

export default Nav