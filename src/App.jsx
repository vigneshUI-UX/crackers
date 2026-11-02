
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

const products = [
  {
    id: 1,
    name: "Golden Sparklers",
    category: "Sparklers",
    price: 120,
    oldPrice: 160,
    image: "https://fourseasonsfireworks.com/wp-content/uploads/2022/05/no10-golden-sparklers-FIN.png",
    tag: "BEST SELLER",
    rating: "4.9"
  },
  {
    id: 2,
    name: "Color Flower Pots",
    category: "Flower Pots",
    price: 250,
    oldPrice: 320,
    image: "https://srimanikandancrackers.com/uploads/productimg/flower_pots_special.jpg",
    tag: "POPULAR",
    rating: "4.8"
  },
  {
    id: 3,
    name: "Sky Rocket Combo",
    category: "Rockets",
    price: 350,
    oldPrice: 450,
    image: "https://oscrackers.in/wp-content/uploads/2021/09/rocket-bomb-1-img.jpg",
    tag: "NEW",
    rating: "4.7"
  },
  {
    id: 4,
    name: "Colorful Chakrams",
    category: "Chakkars",
    price: 180,
    oldPrice: 240,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/9/541651867/BL/KC/LQ/251516432/supreme-big-chakkar-cracker-1000x1000.png",
    tag: "TRENDING",
    rating: "4.8"
  },
  {
    id: 5,
    name: "Festival Fountain",
    category: "Fountains",
    price: 420,
    oldPrice: 550,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/BM/EE/VG/41102168/catalogue-full-2021-28--1000x1000.jpg",
    tag: "SPECIAL",
    rating: "4.9"
  },
  {
    id: 6,
    name: "Grand Festival Box",
    category: "Gift Boxes",
    price: 999,
    oldPrice: 1299,
    image: "https://www.saravedi.in/link-pro/festival-crackers.jpg",
    tag: "LIMITED",
    rating: "5.0"
  }
];

const categories = [
  {
    name: "Sparklers",
    icon: "bi-stars",
    image: "https://jbfireworks.com/media/catalog/product/cache/2765542505660baab28ecd555e27366e/x-factor-%7C-24-shot-500-gram-multi-shot-aerial-firework-by-forward-fireworks.jpg"
  },
  {
    name: "Flower Pots",
    icon: "bi-flower1",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/TJ/RY/NM/146966422/flower-pots-super-deluxe-cracker-1000x1000.jpg"
  },
  {
    name: "Rockets",
    icon: "bi-rocket-takeoff",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/3/401512374/WN/VM/DQ/181621670/product-jpeg-1000x1000.jpeg"
  },
  {
    name: "Chakkars",
    icon: "bi-disc",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/485594064/IP/AK/VV/23186397/ground-chakkar-big-cracker-1000x1000.jpg"
  },
  {
    name: "Fountains",
    icon: "bi-brightness-high",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/5/419038800/WJ/XW/HF/16727380/standard-lavender-fountain-cracker-1000x1000.jpg"
  },
  {
    name: "Gift Boxes",
    icon: "bi-gift",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/8/447228391/WU/OF/UD/36275315/g1-1000x1000.jpg"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [faqOpen, setFaqOpen] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out"
    });

    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 600);
      } else {
        setProgress(value);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const closeMenu = () => setMenuOpen(false);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can explore our collections, select your preferred products and contact our team to enquire about an order."
    },
    {
      question: "Do you offer festival combo packs?",
      answer:
        "Yes! We showcase special festival combo collections and family celebration packs."
    },
    {
      question: "Are your products quality checked?",
      answer:
        "We aim to offer products sourced from licensed manufacturers and encourage customers to check all applicable safety labels."
    },
    {
      question: "Do you provide delivery?",
      answer:
        "Delivery availability depends on your location and applicable local regulations. Please contact our team for details."
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact us using the contact form, phone number or email details provided on this page."
    }
  ];

 

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="site-header">
        <nav className="navbar container">
          <a href="#home" className="brand-logo" onClick={closeMenu}>
           
            <span>
              <span className="brand-dot">5⭐star</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Categories", "#categories"],
              ["Products", "#products"],
              ["Offers", "#offers"],
              ["Contact", "#contact"]
            ].map(([label, link]) => (
              <a key={label} href={link} onClick={closeMenu}>
                {label}
              </a>
            ))}

            <a href="#products" className="nav-shop" onClick={closeMenu}>
              Shop Now 
            </a>
          </div>

          <a href="#products" className="cart-button">
            <i className="bi bi-bag"></i>
            <span>{cart.length}</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section" id="home">
        {/* Full-section background video */}
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          aria-hidden="true"
        >
          <source src="videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="row align-items-center">
            <div className="col-lg-7 hero-content" data-aos="fade-up">
             

              <h1>
                LIGHT UP
                <br />
                YOUR <span>HAPPINESS</span>
              </h1>

              <p>
                Celebrate every special moment with sparkling joy,
                beautiful colours and unforgettable festive memories.
              </p>

              <div className="hero-buttons">
                <a href="#products" className="primary-btn">
                  Explore Collection
                </a>

                <a href="#about" className="secondary-btn">
                  Discover More
                  <i className="bi bi-play-circle"></i>
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <h3>50+</h3>
                  <span>Collections</span>
                </div>
                <div>
                  <h3>100%</h3>
                  <span>Quality Focus</span>
                </div>
                <div>
                  <h3>5K+</h3>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        
      </section>

      {/* FEATURE STRIP */}
      <section className="feature-strip">
        <div className="container">
          <div className="row g-4">
            {[
              ["bi-patch-check", "Quality Focus", "Carefully selected products"],
              ["bi-gift", "Festival Specials", "Exciting festive collections"],
              ["bi-headset", "Customer Support", "Friendly assistance"],
              ["bi-shield-check", "Safety First", "Responsible celebrations"]
            ].map(([icon, title, desc]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div className="feature-item">
                  <i className={`bi ${icon}`}></i>
                  <div>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-image">
                <img
                  src="https://s3.amazonaws.com/s1.feuerwerks.com/product/A/A-048S.png"
                  alt="Festival celebration"
                />
               
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="section-title">
                Every Celebration
                <span> Deserves A Spark.</span>
              </h2>

              <p className="section-description">
                Welcome to Sparkora, your festive destination for
                memorable celebrations. We believe every festival
                deserves happiness, excitement and beautiful memories.
              </p>

              
    

              <div className="about-points">
                <div><i className="bi bi-check-circle-fill"></i> Carefully selected collections</div>
                <div><i className="bi bi-check-circle-fill"></i> Customer-first experience</div>
                <div><i className="bi bi-check-circle-fill"></i> Responsible celebration guidance</div>
              </div>

              <a href="#contact" className="primary-btn" style={{ marginTop: "2.5rem" }}>
                Know More 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section section-padding" id="categories">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <h2 className="section-title">
              Shop By <span>Categories</span>
            </h2>
            <p className="section-description">
              Discover our festive collections for every celebration.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {categories.map((category, index) => (
              <div
                className="col-6 col-md-4 col-lg-4 col-xl-2"
                key={category.name}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <button
                  className="category-card"
                  onClick={() => {
                    setActiveCategory(category.name);
                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                    <span><i className={`bi ${category.icon}`}></i></span>
                  </div>
                  <h5>{category.name}</h5>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section section-padding" id="products">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <div>
              <span className="section-tag"></span>
              <h2 className="section-title">
                Featured <span>Products</span>
              </h2>
              <p className="section-description">
                Explore our showcase of festival favourites.
              </p>
            </div>
          </div>

          <div className="filter-buttons">
            {["All", ...categories.map((item) => item.name)].map((item) => (
              <button
                key={item}
                className={activeCategory === item ? "active" : ""}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredProducts.map((product, index) => (
              <div
                className="col-6 col-md-6 col-lg-4 col-xl-4"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-tag">{product.tag}</span>
                    <button
                      className="product-view"
                      aria-label={`Add ${product.name} to cart`}
                      onClick={() => addToCart(product)}
                    >
                      <i className="bi bi-bag-plus"></i>
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h4>{product.name}</h4>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      {product.rating} <span>(Customer rating)</span>
                    </div>

                    <div className="product-price">
                      <strong>₹{product.price}</strong>
                      <del>₹{product.oldPrice}</del>
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* PROMO */}
      <section className="promo-section" id="offers">
        <div className="container">
          <div className="promo-content" data-aos="zoom-in">
            <h2>MAKE THIS FESTIVAL<br />MORE <em>MAGICAL!</em></h2>
            <p>
              Discover special celebration collections and
              festive combo showcases.
            </p>
            <a href="#products" className="primary-btn">
              Explore Offers 
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section section-padding">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <span className="section-tag"></span>
            <h2 className="section-title">
              Why Choose <span>Us?</span>
            </h2>
            <p className="section-description">
              We make your festive shopping experience simple and special.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {[
              ["bi-award", "Quality Commitment", "A carefully curated showcase with attention to product quality."],
              ["bi-heart", "Customer Happiness", "We focus on making your shopping experience enjoyable."],
              ["bi-box-seam", "Festival Collections", "Explore a variety of collections for different occasions."],
              ["bi-chat-dots", "Friendly Support", "Our team is here to help with your product enquiries."]
            ].map(([icon, title, desc], index) => (
              <div className="col-md-6 col-lg-3" key={title} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="why-card">
                  <div className="why-icon"><i className={`bi ${icon}`}></i></div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FESTIVAL BANNER */}
      <section className="festival-section">
        <div className="container">
          <div className="festival-content" data-aos="fade-up">
            <h2>BRING HOME THE<br /><em>FESTIVAL SPIRIT.</em></h2>
            <p>More colours. More happiness. More unforgettable memories.</p>
            <a href="#contact" className="secondary-btn">
              Get In Touch 
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <span className="section-tag"></span>
            <h2 className="section-title">
              Happy <span>Customers</span>
            </h2>
          </div>

          <div className="row g-4 mt-3">
            {[
              ["UDAYA", "Great collection and a beautiful shopping experience. The website is easy to explore."],
              ["SARA", "Loved the festival collections and the attractive product presentation."],
              ["VICKY", "A wonderful festive shopping experience with helpful customer support."]
            ].map(([name, review], index) => (
              <div className="col-md-4" key={name} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"{review}"</p>
                  <div className="testimonial-user">
                    <div className="user-avatar">{name.charAt(0)}</div>
                    <div>
                      <h5>{name}</h5>
                      <small>Customer review sample</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-padding" id="faq">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="section-title">
                Frequently Asked <span>Questions</span>
              </h2>
              <p className="section-description">
                Find answers to some common questions about our
                collections and customer support.
              </p>
              <a href="#contact" className="primary-btn">
                Ask Us
              </a>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <button
                      className="faq-question"
                      onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                    >
                      {faq.question}
                      <i className={`bi ${faqOpen === index ? "bi-dash-lg" : "bi-plus-lg"}`}></i>
                    </button>

                    {faqOpen === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <h2 className="section-title">
              Let's Start A <span>Conversation.</span>
            </h2>
          
          </div>

          <div className="row g-5 mt-3">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Connect with our team for enquiries and assistance.</p>

                <div className="contact-detail">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <span>+91 7305195172</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5>Email Address</h5>
                    <span>5starcrackers@gmail.com</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Our Location</h5>
                    <span>Sivakasi, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h5>Working Hours</h5>
                    <span>Monday - Saturday | 9 AM - 6 PM</span>
                  </div>
                </div>

                <div className="contact-socials">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                  <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
              >
                <h3>Send Us A Message</h3>

                {formSubmitted && (
                  <div className="form-success">
                    Thank you! Your demo message has been submitted.
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>

                  <div className="col-md-6">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone" required />
                  </div>

                  <div className="col-md-6">
                    <label>Subject</label>
                    <input type="text" placeholder="Enter subject" required />
                  </div>

                  <div className="col-12">
                    <label>Your Message</label>
                    <textarea rows="5" placeholder="Write your message..." required></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="primary-btn">
                      Send Message <i className="bi bi-send"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content" data-aos="zoom-in">
            <div>
              <h2>Get The Latest <em>Festive Updates.</em></h2>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe <i className="bi bi-arrow-right"></i></button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="row g-5 footer-main">
            <div className="col-lg-4 col-md-6">
              <a href="#home" className="brand-logo footer-logo">
                <span>
                  <span className="brand-dot">5⭐STAR</span>
                </span>
              </a>
               <div className="contact-socials">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#categories">Categories</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <h4>Our Collections</h4>
              {categories.map((item) => (
                <a href="#products" key={item.name}>{item.name}</a>
              ))}
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Contact Details</h4>
              <p><i className="bi bi-geo-alt"></i> Sivakasi, Tamil Nadu</p>
              <p><i className="bi bi-telephone"></i> +91 7305195172</p>
              <p><i className="bi bi-envelope"></i> 5starcrackers@gmail.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 5⭐STAR CRACKERS. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <a href="#home" className="back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

    </div>
    
  );
}

export default App;
