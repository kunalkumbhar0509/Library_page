import React from 'react';

const App = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    header: {
      backgroundColor: '#f9f9f9',
      padding: '10px',
      textAlign: 'center',
      position: 'relative'
    },
    headerBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("Back3.png")', 
      opacity: 0.3,
      pointerEvents: 'none'
    },
    searchContainer: {
      marginTop: '10px'
    },
    searchInput: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '200px'
    },
    searchButton: {
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    searchButtonHover: {
      backgroundColor: '#0056b3'
    },
    nav: {
      backgroundColor: '#4caf50',
      color: '#ffffff',
      padding: '10px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      margin: '5px 10px'
    },
    hero: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: '20px'
    },
    heroImage: {
      maxWidth: '100%',
      marginRight: '40px',
      flex: '1 1 300px'
    },
    heroContent: {
      maxWidth: '100%',
      flex: '1 1 300px'
    },
    heroHeading: {
      margin: '0 0 10px'
    },
    levelUp: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      textAlign: 'center'
    },
    articles: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px'
    },
    article: {
      flex: '1 1 300px',
      padding: '10px'
    },
    articleImage: {
      width: '100%',
      height: 'auto'
    },
    galleryContainer: {
      display: 'flex',
      overflowX: 'auto',
      padding: '20px',
      boxSizing: 'border-box',
      scrollBehavior: 'smooth'
    },
    galleryItem: {
      flex: '0 0 auto',
      marginRight: '10px',
      width: '200px',
      textAlign: 'center'
    },
    galleryImage: {
      width: '100%',
      height: '300px',
      backgroundColor: '#ccc',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px'
    },
    galleryText: {
      marginTop: '10px',
      fontSize: '16px'
    },
    footer: {
      backgroundColor: '#4caf50',
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    },
    footerRelative: {
      position: 'relative'
    }
  };

  const handleScroll = (event) => {
    event.preventDefault();
    document.getElementById('gallery').scrollLeft += event.deltaY * 6;
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>The George Peabody Library</h1>
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search the catalog..." style={styles.searchInput} />
          <button style={styles.searchButton}>Search</button>
        </div>
      </header>
      <nav style={styles.nav}>
        <div>
          <a href="#" style={styles.navLink}>Books & More</a>
          <a href="#" style={styles.navLink}>Services</a>
          <a href="#" style={styles.navLink}>Events</a>
        </div>
        <div>
          <a href="#" style={styles.navLink}>Contact Us</a>
          <a href="#" style={styles.navLink}>Help</a>
          <a href="#" style={styles.navLink}>Log In / Sign Up</a>
        </div>
      </nav>
      <div className="hero" style={styles.hero}>
        <img src="Library.jpeg" alt="Library" style={styles.heroImage} />
        <div className="content" style={styles.heroContent}>
          <h2 style={styles.heroHeading}>The George Peabody Library</h2>
          <p>One of the most beautiful libraries in Maryland is John Hopkins’ George Peabody Library. 
            Located in the world-renowned Peabody Institute of Music in Baltimore, Maryland, the Peabody is the 19th-century research library of Johns Hopkins University's Sheridan Libraries Special Collections.
            The library’s magnificent settings have made it one of the city’s most popular venues for weddings and events.</p>
          <button style={styles.searchButton}>Learn More</button>
        </div>
      </div>
      <h1>Best Sellers</h1>
      <div className="gallery-container" id="gallery" style={styles.galleryContainer} onWheel={handleScroll}>
        {[
          { src: 'Aai.jpg', text: 'Shyam Chi Aai' },
          { src: 'Zombi.jpg', text: 'Zombi' },
          { src: 'Shellby.jpg', text: 'Frankenstein -By Mary shelley' },
          { src: 'Partition.jpg', text: 'Pakistan Or the Partition of India' },
          { src: 'Savarkar.jpg', text: 'The Indian War of Independence 1857' }
        ].map((item, index) => (
          <div className="gallery-item" key={index} style={styles.galleryItem}>
            <div className="gallery-image" style={{...styles.galleryImage, backgroundImage: `url(${item.src})`}}></div>
            <div className="gallery-text" style={styles.galleryText}>{item.text}</div>
          </div>
        ))}
      </div>
      <div className="level-up" style={styles.levelUp}>
        <h2>Level Up with your library card</h2>
        <p>Unlock an expansion pack of tools and services to boost your energy, improve your odds, and reboot your life.</p>
        <button style={styles.searchButton}>Learn More</button>
      </div>
      <div className="articles" style={styles.articles}>
        {[
          { src: 'Same.jpg', text: 'Same Library, New Website' },
          { src: 'Get.jpg', text: 'Get free access to books, magazines, newspapers & study tools' },
          { src: 'publish.png', text: 'Publish your article and books.' }
        ].map((item, index) => (
          <div className="article" key={index} style={styles.article}>
            <img src={item.src} alt={item.text} style={styles.articleImage} />
            <h4>{item.text}</h4>
          </div>
        ))}
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 George Peabody Library</p>
      </footer>
    </div>
  );
};

export default App;
