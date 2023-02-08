import { Badge } from "react-bootstrap";
import "./publicationEntry.css";

function PublicationEntry({ publication }) {
  return (
    <div className="pub-entry">
      <div className="d-flex justify-content-between">
        <div className="pub-title">
          <a href={publication.url}>{publication.title}</a>
        </div>
        <div className="pub-detail">
          <b>{publication.conference}</b>
          {publication.toappear ? " (To Appear)" : ""}
        </div>
      </div>
      <div className="pub-name">
        {publication.authors.map((author, i) => (
          <>
            {author.url ? (
              <a href={author.url}>{author.name}</a>
            ) : (
              <span className={author.name === "DaEun Choi" ? "my-name" : ""}>{author.name}</span>
            )}

            {i !== publication.authors.length - 1 && ", "}
          </>
        ))}
      </div>
      <div className="pub-detail my-1">
        {publication.workshop && <>{publication.workshop}</>}
        {publication.website && (
          <>
            <a className="me-2" href={publication.website}>
              Project website
            </a>
          </>
        )}
        {publication.pdf && (
          <>
            <a className="me-2" href={publication.pdf}>
              PDF
            </a>
          </>
        )}
        {publication.video && (
          <>
            <a className="me-2" href={publication.video}>
              Video
            </a>
          </>
        )}
      </div>
      <div className="pub-award">
        {publication.award?.split(",").map((award) => (
          <Badge className="pub-award">{award}</Badge>
        ))}
      </div>
    </div>
  );
}

export default PublicationEntry;
