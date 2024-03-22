import React from 'react'
import styles from "./styles.module.scss";
import Link from 'next/link';

const Nav = () => {
  return (
    <div class={styles.navbar}>
            <div class={styles.leftbar}>
            DEVELORISE
            </div>
            <div class={styles.rightnav} >
            <Link href="/getStarted" className={styles.getStarted}>Get Started Here</Link>
            <Link href="/about">Our Work</Link>
            <Link href="/about">Contact Us</Link>
            </div>
        </div>
  )
}

export default Nav