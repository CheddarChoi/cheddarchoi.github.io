import "./publicationEntry.css";

// Custom button component
function PublicationButton({ href, icon, text, award = false }) {
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
    <a
      className="btn btn-sm btn-secondary me-2 mt-0"
      href={href}
      style={{
        padding: "2px 6px",
        color: "black",
        fontSize: "12px",
        fontWeight: "600",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      }}
    >
      {icon && <i className={"pe-1 " + icon}></i>}
      {text}
    </a>
  );
}

function PublicationEntry({ publication }) {
  return (
    <div className="pub-entry">
      <div className="d-lg-flex justify-content-between">
        <div>
          <div className="pub-title">
            <div className="mb-1">
              {publication.award?.split(",").map((award) => (
                <div className="badge text-bg-primary mt-0 me-2" style={{ fontWeight: "600" }}>
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
            icon="bi bi-house-fill"
            text="Project website"
          />
        )}
        {publication.arxiv && (
          <PublicationButton href={publication.arxiv} icon="bi bi-file-pdf-fill" text="Arxiv" />
        )}
        {publication.pdf && (
          <PublicationButton href={publication.pdf} icon="bi bi-file-pdf-fill" text="PDF" />
        )}
        {publication.video && (
          <PublicationButton href={publication.video} icon="bi bi-camera-video-fill" text="Video" />
        )}
      </div>
    </div>
  );
}

export default PublicationEntry;
