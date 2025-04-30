// import React, { useState } from "react"

// import mainImage from "../../assets/hero-img.webp"
import styles from "./Main.module.css"
import NavBar from "../head/Navbar"
import Conversationchatbot from "./Conversationchatbot";
import MainNextSection from "./MainNextsection";
import images from "../../assets/images"; 


const Main=() =>{
  return (
    <>
    <NavBar/>
    <section className={styles.heroSection}>
      <img src={images.heroImage} alt="background" className={styles.bgImage} />

      <div className={styles.overlay}>
        <img src={images.circle} alt="chat bubble" className={styles.circle} />
        <img src={images.triangle} alt="bot" className={styles.triangle} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          AI <span>Artificial Intelligence</span> & AI Technology <br />
          <span className={styles.gradientText}>Startups Template</span>
        </h1>
        <p className={styles.subtitle}>
          Elevate your website development expertise and supercharge your efficiency.
        </p>
        <button className={styles.button}>View Demo →</button>
      </div>
    </section>
        <MainNextSection/>
        <Conversationchatbot/>
        
  
    </>
  )
}

export default Main






