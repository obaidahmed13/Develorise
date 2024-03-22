import React from 'react'
import styles from "./styles.module.scss";
import { useScroll } from "framer-motion";
import { projects } from './data';
import Card from '@/src/components/Card';
import {  useRef } from 'react';


const cardpage = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })
  return (
    <div className={styles.container}>
        <div className={styles.halfpage}>cardpage</div>
        <div className={styles.halfpage}>
        {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
        </div>
    </div>

  )
}

export default cardpage