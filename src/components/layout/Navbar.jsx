import { useEffect, useState } from "react";
import logo from "../../assets/sunic_logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`nav ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* LOGO */}
      <a className="nav-logo" href="/">
        <img
          src={logo}
          alt="Sunic Technologies"
          className="nav-logo-img"
        />

        <span className="logo-text">
          Sunic Technologies
        </span>
      </a>

      {/* NAV LINKS */}
      <ul className="nav-links">
        {[
          "About",
          "Services",
          "Solutions",
          "Contact",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </li>
        ))}

        {/* CTA BUTTON */}
        <li>
          <a
            className="nav-cta"
            href="#contact"
          >
            Talk to Experts →
          </a>
        </li>
      </ul>
    </nav>
  );
}