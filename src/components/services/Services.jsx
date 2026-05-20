import { SERVICES } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      className="section skills-section"
      id="services"
    >

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="section-label">
          Services
        </div>

        <h2 className="section-title">
          End-to-End IT Infrastructure
          <em> Services</em>
        </h2>

      </div>

      <div className="skills-grid">

        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}

      </div>

    </section>
  );
}