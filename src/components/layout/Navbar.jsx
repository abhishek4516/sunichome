import { useEffect, useState } from "react";
import logo from "../../assets/sunic_logo.png";
import "./Navbar.css";

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Solutions", id: "solutions" },
    { name: "Services", id: "ecosystem" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          
      
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-center">
            <div className={`logo-pill ${scrolled ? "logo-pill-small" : ""}`}>
              <div 
                className="logo-pill-progress" 
                style={{ width: `${scrollProgress}%` }}
              ></div>
              <a href="/" className="logo-pill-content">
                <img src={logo} alt="Sunic" className="logo-pill-img" />
                <span className="logo-pill-text">Sunic Technologies</span>
              </a>
            </div>
          </div>

      
          <div className="navbar-right">
         
            <button className="navbar-demo" onClick={onContactClick}>
              Book a demo
            </button>
          </div>

          <button
            className={`navbar-mobile-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-container">
          <ul className="mobile-menu-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-buttons">
            <button className="mobile-menu-demo" onClick={() => {
              setMenuOpen(false);
              onContactClick();
            }}>
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}