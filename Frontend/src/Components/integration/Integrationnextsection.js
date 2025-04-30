import React from 'react';
import styles from './integrationnextsection.module.css';
import integrationHero from '../../assets/integration/color-bg.png'
import Navbar  from '../head/Navbar';
import integrationImage from '../../assets/integration/01.jpg'
import integrationImage2 from '../../assets/integration/02.jpg'
import integrationImage3 from '../../assets/integration/03.jpg'

const App = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.integrationWrapper}>
      <div className={styles.integrationContent}>
        <h1 className={styles.integrationTitle}>
          <span className={styles.integrationPart1}>INNOVATIVE</span><br></br>
          <span className={styles.integrationPart2}>AI</span>
          <span className={styles.integrationPart3}><i>SOLUTIONS</i></span>
        </h1>
      </div>
      <div className={styles.integrationBackground}>
        <img
          src={integrationHero} // Replace with your futuristic image URL
          alt="Innovative AI Background"
          className={styles.integrationImage}
        />
      </div>
    </div>

        <div className={styles.integrationNext}>
        <div className={styles.pageLayout}>
      <header className={styles.headerSection}>
        <span className={styles.titleIcon}>✨</span>
        <h1 className={styles.mainTitle}>PROJECTS</h1>
      </header>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={integrationImage} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>

      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
         
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
          <div className={styles.integrationimage}>
            <img
            src={integrationImage2} 
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
        </div>
      </main>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={integrationImage3} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>
    </div>

        </div>
    </div>
  );
};

export default App;