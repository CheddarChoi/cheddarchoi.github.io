import "./services.css";

const SERVICE_GROUPS = [
  {
    role: "Program Committee",
    items: [{ name: "UIST Posters", year: "2026" }],
  },
  {
    role: "Reviewer",
    items: [
      { name: "CHI", year: "2025 – 2026" },
      { name: "UIST", year: "2025 – 2026" },
      { name: "DIS", year: "2024 – 2026" },
      { name: "C&C", year: "2026" },
      { name: "CHI LBW (Posters)", year: "2024 – 2026" },
    ],
  },
  {
    role: "Student Volunteer",
    items: [
      { name: "CHI", year: "2024 – 2025" },
      { name: "CSCW", year: "2022" },
    ],
  },
];

function Services() {
  return (
    <div id="services" className="custom-section justify-content-center">
      <h2>Academic Services</h2>
      <div className="services-list">
        {SERVICE_GROUPS.map((group) => (
          <div className="service-group" key={group.role}>
            <h4 className="service-role">{group.role}</h4>
            <ul className="service-items">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="service-venue">{item.name}</span>{" "}
                  <span className="service-year">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
