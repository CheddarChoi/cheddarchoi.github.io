import { useState, useEffect, useRef } from "react";
import PublicationEntry from "../components/publicationEntry";
import publicationsData from "../data/publications.json";
import postersData from "../data/posters.json";
import preprintData from "../data/preprints.json";
import "./publications.css";

function Publications() {
  const [showFirstAuthorOnly, setShowFirstAuthorOnly] = useState(false);
  const [displayedPublications, setDisplayedPublications] = useState(publicationsData);
  const [displayedPreprints, setDisplayedPreprints] = useState(preprintData);
  const [displayedPosters, setDisplayedPosters] = useState(postersData);
  const timeoutRef = useRef(null);

  // Helper function to check if DaEun Choi is the first author or co-first author
  const isFirstAuthor = (authors) => {
    if (!authors || authors.length === 0) return false;
    
    // Check if DaEun Choi is the first author
    const firstAuthorName = authors[0].name;
    if (firstAuthorName.includes("DaEun Choi")) {
      return true;
    }
    
    // Check if DaEun Choi is a co-first author (marked with *)
    // Co-first authors are typically listed with "*" and appear early in the author list
    const hasCoFirstAuthor = authors.some((author, index) => {
      // Check if this author is DaEun Choi with * (co-first author)
      if (author.name.includes("DaEun Choi") && author.name.includes("*")) {
        // Also check if the first author has * (indicating co-first authorship)
        return firstAuthorName.includes("*");
      }
      return false;
    });
    
    return hasCoFirstAuthor;
  };

  // Filter data based on the checkbox state
  const filteredPublications = showFirstAuthorOnly
    ? publicationsData.filter((pub) => isFirstAuthor(pub.authors))
    : publicationsData;

  const filteredPreprints = showFirstAuthorOnly
    ? preprintData.filter((pub) => isFirstAuthor(pub.authors))
    : preprintData;

  const filteredPosters = showFirstAuthorOnly
    ? postersData.filter((pub) => isFirstAuthor(pub.authors))
    : postersData;

  // Handle transitions for smooth exit animations
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // After exit animation completes, update the displayed items
    timeoutRef.current = setTimeout(() => {
      setDisplayedPublications(filteredPublications);
      setDisplayedPreprints(filteredPreprints);
      setDisplayedPosters(filteredPosters);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [filteredPublications, filteredPreprints, filteredPosters]);

  return (
    <>
      <div id="publications" className="custom-section justify-content-center">
        <h2 className="m-0 mb-3 publications-header">
          Publications
          <button
            onClick={() => setShowFirstAuthorOnly(!showFirstAuthorOnly)}
            className={`filter-button ${showFirstAuthorOnly ? "active" : ""}`}
          >
            <span className="toggle-switch">
              <span className="toggle-switch-handle" />
            </span>
            First-author
          </button>
        </h2>
        <div className="mb-4">
          <h3 className="m-0">Conference Papers & Journal Articles</h3>
          <div className="publications-list">
            {displayedPublications.length > 0 ? (
              displayedPublications.map((pub) => {
                const isVisible = filteredPublications.some((p) => p.title === pub.title);
                return (
                  <div
                    key={pub.title}
                    className={`publication-item ${isVisible ? "entering" : "exiting"}`}
                  >
                    <PublicationEntry publication={pub} />
                  </div>
                );
              })
            ) : filteredPublications.length > 0 ? null : (
              <p className="text-muted mt-2">No publications found.</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="m-0">Preprints</h3>
          <div className="publications-list">
            {displayedPreprints.length > 0 ? (
              displayedPreprints.map((pub) => {
                const isVisible = filteredPreprints.some((p) => p.title === pub.title);
                return (
                  <div
                    key={pub.title}
                    className={`publication-item ${isVisible ? "entering" : "exiting"}`}
                  >
                    <PublicationEntry publication={pub} />
                  </div>
                );
              })
            ) : filteredPreprints.length > 0 ? null : (
              <p className="text-muted mt-2">No preprints found.</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="m-0">Posters, Demos, Workshop Papers</h3>
          <div className="publications-list">
            {displayedPosters.length > 0 ? (
              displayedPosters.map((pub) => {
                const isVisible = filteredPosters.some((p) => p.title === pub.title);
                return (
                  <div
                    key={pub.title}
                    className={`publication-item ${isVisible ? "entering" : "exiting"}`}
                  >
                    <PublicationEntry publication={pub} />
                  </div>
                );
              })
            ) : filteredPosters.length > 0 ? null : (
              <p className="text-muted mt-2">No posters found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Publications;
