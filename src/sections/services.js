import "./services.css";
import servicesData from "../data/services.json";

const SERVICE_GROUPS = servicesData;

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
                  {item.award && <span className="service-award"> {item.award}</span>}
                </li>
              ))}
            </ul>
            {group.legend && <div className="service-legend">{group.legend}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
