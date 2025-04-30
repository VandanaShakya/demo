// src/components/Card.jsx
import React, { useState} from 'react';
import styles from './MainNextSection.module.css';
import cardimg from '../../assets/card1-img.jpg'
import card2 from '../../assets/card2-img.jpg'
import card3 from '../../assets/card3-mg.jpg'
import industry1 from '../../assets/industry-img1.png'
import industry2 from '../../assets/industry-img2.png'
import industry3 from '../../assets/industry-img3.png'
import industry4 from '../../assets/industry-img4.png'


const MainNextSection = () => {

  const faqs = [
    {
      id: 1,
      question: "What Type Of Websites Can I Build With This Theme?",
      answer: "You can build a variety of websites such as business, portfolio, e-commerce, blog, and more with this theme. It’s highly customizable to suit your needs."
    },
    {
      id: 2,
      question: "Will I Get All The Demos For Single Purchase With Lifetime Validity?",
      answer: "Yes, with a single purchase, you get access to all demos with lifetime validity, including future updates and support."
    },
    {
      id: 3,
      question: "Can I Change The Theme Language To My Local Language?",
      answer: "Absolutely! The theme supports multi-language options, and you can easily integrate your local language using translation plugins."
    },
    {
      id: 4,
      question: "Why The Price Of Aiglobe Is Affordable Compared To Other Themes Providing Similar Features?",
      answer: "Aiglobe offers competitive pricing by optimizing development costs and providing a streamlined feature set without compromising quality."
    },
    {
      id: 5,
      question: "Is There A Money-Back Guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you’re not satisfied with the theme."
    },
    {
      id: 6,
      question: "How Can I Get Support For Customization?",
      answer: "You can reach our support team via email or our dedicated support portal for assistance with customization."
    },
    {
      id: 7,
      question: "Can I Use This Theme For Multiple Websites?",
      answer: "The license allows use on a single site. For multiple sites, you’ll need to purchase additional licenses."
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('heavy');
  const [expanded, setExpanded] = useState(null);

  // Object mapping categories to their images
  const categoryImages = {
    heavy: industry1,
    transportation: industry2,
    healthcare: industry3,
    entertainment: industry4,
  };

  // Handler for category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
   <div>

<div className={styles.cardContainer}>
      <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={cardimg} alt="Card visual"/>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>Card Title</h2>
        <p className={styles.description}>
          This is a sample description for the card component. 
          It can contain any text you want to display.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      </div>


      <div className={styles.card}>
      <div className={styles.cardImage}>
        <img 
          src={card2}
          alt="Card visual" 
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>Card Title</h2>
        <p className={styles.description}>
          This is a sample description for the card component. 
          It can contain any text you want to display.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      </div>


      <div className={styles.card}>
      <div className={styles.cardImage}>
        <img 
          src={card3} 
          alt="Card visual" 
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>Card Title</h2>
        <p className={styles.description}>
          This is a sample description for the card component. 
          It can contain any text you want to display.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      </div>
    </div>



    <div className={styles.industry}>
      <div className={styles.sidebar}>
        <div className={`${styles.category} ${selectedCategory === 'heavy' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('heavy')}>
          <span className={styles.icon}>🤖</span>
          <div>
            <h3 className={styles.categoryTitle}>Heavy industry</h3>
            <p className={styles.categorySubtitle}>All kind of industry</p>
          </div>
        </div>
        <div 
          className={`${styles.category} ${selectedCategory === 'transportation' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('transportation')}
        >
          <span className={styles.icon}>🚗</span>
          <div>
            <h3 className={styles.categoryTitle}>Transportation</h3>
            <p className={styles.categorySubtitle}>All kind of transport</p>
          </div>
        </div>
        <div 
          className={`${styles.category} ${selectedCategory === 'healthcare' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('healthcare')}
        >
          <span className={styles.icon}>👩‍⚕️</span>
          <div>
            <h3 className={styles.categoryTitle}>Healthcare</h3>
            <p className={styles.categorySubtitle}>Human health research</p>
          </div>
        </div>
        <div 
          className={`${styles.category} ${selectedCategory === 'entertainment' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('entertainment')}
        >
          <span className={styles.icon}>🎬</span>
          <div>
            <h3 className={styles.categoryTitle}>Entertainment</h3>
            <p className={styles.categorySubtitle}>Media and music</p>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Artificial intelligence in industry</h1>
        <p className={styles.description}>
          Dummy text is also used to demonstrate the appearance of different
          typefaces and layouts, and in general the content of dummy text is
          nonsensical.
        </p>
        <div className={styles.illustration}>
          <img 
            src={categoryImages[selectedCategory]} 
            alt={`${selectedCategory} illustration`}
            className={styles.industryimage}
          />
        </div>
      </div>
    </div>

    <div className={styles.pageWrapper}>
      <header className={styles.headerSection}>
      <span className={styles.categoryLabel}>GenAI Use Cases</span>
        <h1 className={styles.mainHeading}>Write Better Content Faster, The Future Of AI Writing Tools is Here</h1>
        
      </header>
      <main className={styles.contentArea}>
       <div className={styles.featurecontent}>
       <div className={styles.featureBox}>
          <div className={styles.featureIcon}>📈</div>
          <h2 className={styles.featureTitle}>Digital Ad Copy</h2>
          <p className={styles.featureDescription}>A Magical Tool To Optimize your content for the first know who you're targeting, identify your target.</p>
          <a href="#" className={styles.actionLink}>Try Digital Ad Copy </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>🛒</div>
          <h2 className={styles.featureTitle}>eCommerce Copy</h2>
          <p className={styles.featureDescription}>Writing blog content with GenAI, make sure you have a clear understanding of who your audience is.</p>
          <a href="#" className={styles.actionLink}>Try eCommerce Copy </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>📧</div>
          <h2 className={styles.featureTitle}>Email Marketing</h2>
          <p className={styles.featureDescription}>Writing blog content with GenAI, make sure you have a clear understanding of who your audience is.</p>
          <a href="#" className={styles.actionLink}>Try Email Marketing </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>🌐</div>
          <h2 className={styles.featureTitle}>Landing Page Copy</h2>
          <p className={styles.featureDescription}>First know who you're targeting. Identify your target audience and understand their needs.</p>
          <a href="#" className={styles.actionLink}>Try Landing Page Copy </a>
        </div>
       </div>


        <div className={styles.featurecontent}>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>📈</div>
          <h2 className={styles.featureTitle}>Digital Ad Copy</h2>
          <p className={styles.featureDescription}>A Magical Tool To Optimize your content for the first know who you're targeting, identify your target.</p>
          <a href="#" className={styles.actionLink}>Try Digital Ad Copy </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>🛒</div>
          <h2 className={styles.featureTitle}>eCommerce Copy</h2>
          <p className={styles.featureDescription}>Writing blog content with GenAI, make sure you have a clear understanding of who your audience is.</p>
          <a href="#" className={styles.actionLink}>Try eCommerce Copy </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>📧</div>
          <h2 className={styles.featureTitle}>Email Marketing</h2>
          <p className={styles.featureDescription}>Writing blog content with GenAI, make sure you have a clear understanding of who your audience is.</p>
          <a href="#" className={styles.actionLink}>Try Email Marketing </a>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureIcon}>🌐</div>
          <h2 className={styles.featureTitle}>Landing Page Copy</h2>
          <p className={styles.featureDescription}>First know who you're targeting. Identify your target audience and understand their needs.</p>
          <a href="#" className={styles.actionLink}>Try Landing Page Copy </a>
        </div>
        </div>
      </main>
    </div>


    <div className={styles.faqContainer}>
      <header className={styles.faqHeader}>
        <h1 className={styles.faqTitle}>How Can We Help You?</h1>
        <p className={styles.faqSubtitle}>
          We understand that you have questions, and we welcome them. Below is the collection of queries which comes frequently from our clients.
        </p>
      </header>

      <main className={styles.faqMain}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(faq.id)}>
              <span>{faq.id}. {faq.question}</span>
              <span className={`${styles.arrow} ${expanded === faq.id ? styles.arrowUp : ''}`}>›</span>
            </div>

            {expanded === faq.id && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
    
   </div>
  );
};

export default MainNextSection;