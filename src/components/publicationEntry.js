import "./publicationEntry.css";

// Custom button component
function PublicationButton({ href, icon, text, type, award = false }) {
  if (href === null) {
    return (
      <div
        className="badge text-bg-primary mt-0"
        href={href}
        style={{
          color: "black",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "default",
          boxShadow: "none",
        }}
      >
        {icon && <i className={"pe-1 " + icon}></i>}
        {text}
      </div>
    );
  }
  return (
    <a className={`pub-link pub-link-${type} me-1`} href={href}>
      {icon && <i className={"pe-1 " + icon}></i>}
      {text}
    </a>
  );
}

function PublicationEntry({ publication }) {
  return (
    <div className="pub-entry">
      <div className="d-lg-flex justify-content-between gap-3">
        <div>
          <div className="pub-title">
            <div className="mb-1">
              {publication.award?.split(",").map((award) => (
                <div className="badge pub-award-badge mt-0 me-2">
                  <i className="pe-1 bi bi-award"></i>
                  {award}
                </div>
              ))}
            </div>
            <a href={publication.url}>{publication.title}</a>
          </div>

          <div className="pub-name pb-1">
            {publication.authors.map((author, i) => (
              <>
                {author.url ? (
                  <a href={author.url}>{author.name}</a>
                ) : (
                  <span className={author.name.includes("DaEun Choi") ? "my-name" : ""}>
                    {author.name}
                  </span>
                )}

                {i !== publication.authors.length - 1 && ", "}
              </>
            ))}
          </div>
        </div>
        <div className="pub-detail pub-venue">
          <b>{publication.conference}</b>
          <br className="d-none d-lg-block" />
          {publication.toappear ? " (To appear)" : ""}
        </div>
      </div>

      <div className="pub-detail my-1 mt-1">
        {publication.workshop && <div className="mb-2">{publication.workshop}</div>}
        {publication.website && (
          <PublicationButton
            href={publication.website}
            type="website"
            icon="bi bi-house-fill"
            text="Project website"
          />
        )}
        {publication.url && (
          <PublicationButton href={publication.url} type="doi" text="DOI" />
        )}
        {publication.arxiv && (
          <PublicationButton href={publication.arxiv} type="arxiv" text="arXiv" />
        )}
        {publication.pdf && (
          <PublicationButton href={publication.pdf} type="pdf" icon="bi bi-file-pdf-fill" text="PDF" />
        )}
        {publication.video && (
          <PublicationButton href={publication.video} type="video" icon="bi bi-camera-video-fill" text="Video" />
        )}
      </div>
    </div>
  );
}

export default PublicationEntry;
