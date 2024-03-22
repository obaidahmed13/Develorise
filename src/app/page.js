'use client'
import Nav from '../components/Nav/Nav'
import MainPage from "../pages/Mainpage/mainpage";
import ZoomParallax from "../components/ZoomParallax/index"
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import "./globals.css";
import { useScroll } from "framer-motion";
import StandOut from "../pages/standout/standout"
import Performance from "../pages/performance/performance"
import Card from '../components/Card';
import { projects } from '../pages/cardpage/data';
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })
  
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
  return (
    <main >
      <Nav/>
      <MainPage/>
      <ZoomParallax/>
      
      <div style={{ marginTop: '20px'}}>
        <StandOut />
      </div>
      <div style={{ position: 'relative', top: '-60px' }}>
        <Performance />
      </div>
      <div style={{ position: 'relative', top: '-60px' }}>
        <StandOut />
      </div>

      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }

      
    </main>
  );
}
