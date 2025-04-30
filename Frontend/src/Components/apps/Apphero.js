import NavBar from '../head/Navbar';
import styles from './Apphero.module.css';
import images from '../../assets/images'


export default function Apphero() {
  return (
   <>
   <NavBar/>
     <section className={styles.appDownloadSection}>
      <div className={styles.header}>
        <h1>Enjoy our customer service app for <br /> mobile & desktop</h1>
      </div>
      <div className={styles.downloadOptions}>
        <div className={styles.optionWeb}>
          <div className={styles.iconWeb}>
            <img src={images.web} className={styles.web} alt='WEB'/>
          </div>
          <p>Web</p>
          <button className={styles.buttonWeb}>Login to app</button>
        </div>

        <div className={styles.optionMac}>
          <div className={styles.iconMac}>
          <img src={images.mac} className={styles.mac} alt='MAC'/>
          </div>
          <p>Mac</p>
          <button className={styles.buttonMac}>Download for <span role="img" aria-label="mac"></span></button>
        </div>

        <div className={styles.optionWindows}>
          <div className={styles.iconWindows}>
          <img src={images.window} className={styles.window} alt='WINDOW'/>
          </div>
          <p>Windows</p>
          <button className={styles.buttonWindows}>Download for 🪟</button>
        </div>

        <div className={styles.optionIphone}>
          <div className={styles.iconIphone}>
          <img src={images.iphone} className={styles.iphone} alt='IPHONE'/>
          </div>
          <p>iPhone</p>
          <button className={styles.buttonIphone}>Download for </button>
        </div>

        <div className={styles.optionAndroid}>
          <div className={styles.iconAndroid}>
          <img src={images.android} className={styles.android} alt='ANDROID'/>
          </div>
          <p>Android</p>
          <button className={styles.buttonAndroid}>Download for 🤖</button>
        </div>
      </div>
    </section>

    <div>
    <section className={styles.exclusiveSection}>
      <div className={styles.header}>
        <h1>
          Exclusive <span className={styles.highlight}>AI-Powered</span> <br />
          Idea & <span className={styles.highlight}>Automation</span> Services
        </h1>
      </div>

      <div className={styles.servicesContainer}>
        {/* Card 1 */}
        <div className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <img
              src={images.appimage1}
              alt="Business Strategy Planning"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.textContent}>
              <h2>Business Strategy Planning</h2>
              <p>
                Duise sagettis rosand accumsas magna onest curos adipisine contacting the agency secondar
              </p>
              <a href="" className={styles.moreLink}>
                More Details ↗
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <img
              src={images.appimage2}
              alt="Data Analysis Services"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.textContent}>
              <h2>Data Analysis Services</h2>
              <p>
                Duise sagettis rosand accumsas magna onest curos adipisine contacting the agency secondar
              </p>
              <a href="#" className={styles.moreLink}>
                More Details ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.servicesContainer}>
        {/* Card 1 */}
        <div className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <img
              src={images.appimage3}
              alt="Business Strategy Planning"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.textContent}>
              <h2>Business Strategy Planning</h2>
              <p>
                Duise sagettis rosand accumsas magna onest curos adipisine contacting the agency secondar
              </p>
              <a href="#" className={styles.moreLink}>
                More Details ↗
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <img
              src={images.appimage4}
              alt="Data Analysis Services"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.textContent}>
              <h2>Data Analysis Services</h2>
              <p>
                Duise sagettis rosand accumsas magna onest curos adipisine contacting the agency secondar
              </p>
              <a href="#" className={styles.moreLink}>
                More Details ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
   </>
  );
}
