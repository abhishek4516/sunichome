import { SOLUTIONS } from "../../data/solutions";

export default function Solutions() {
  return (
    <section
      className="section"
      id="solutions"
    >

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="section-label">
          Solutions
        </div>

        <h2 className="section-title">
          Enterprise Technology
          <em> Solutions</em>
        </h2>

        <div className="skills-grid">

          {SOLUTIONS.map((item) => (
            <div
              className="skill-card"
              key={item.title}
            >
              <div className="skill-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}