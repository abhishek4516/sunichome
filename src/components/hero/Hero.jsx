import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-badge">
            Trusted Enterprise IT Infrastructure Partner Since 2002
          </div>

          <h1 className="hero-title">
            Your IT Infrastructure.
            <br />
            <strong>Optimised. Future-Ready.</strong>
          </h1>

          <p className="hero-sub">
            India's enterprises run on infrastructure.
            We make sure yours runs better.
          </p>

          <div className="hero-actions">

            <a
              className="btn-primary"
              href="#solutions"
            >
              Explore Our Solutions
            </a>

            <a
              className="btn-outline"
              href="#contact"
            >
              Get in Touch
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <HeroVisual />

      </div>

    </section>
  );
}