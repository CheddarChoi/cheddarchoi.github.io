import PublicationEntry from "../components/publicationEntry";
import publicationsData from "../data/publications.json";
import postersData from "../data/posters.json";

function Publications() {
  return (
    <>
      <div id="publications" className="custom-section justify-content-center">
        <h2>Publications</h2>
        <div style={{ marginBottom: "1rem" }}>
          <h3>Conference Papers</h3>
          {publicationsData.map((pub) => (
            <PublicationEntry publication={pub} />
          ))}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <h3>Posters, Demos, Workshop Papers</h3>
          {postersData.map((pub) => (
            <PublicationEntry publication={pub} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Publications;
