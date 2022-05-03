import { Button, Badge } from "react-bootstrap";
import "./publicationEntry.css";

function PublicationEntry({ publication }) {
  return (
    <div className="pub-entry">
      <div className="pub-title">
        <a href={publication.url}>{publication.title}</a>
      </div>
      <div className="pub-name">
        {publication.authors.map((author, i) => (
          <>
            {author.url ? (
              <a href={author.url}>{author.name}</a>
            ) : (
              <span className={author.name === "DaEun Choi" ? "my-name" : ""}>
                {author.name}
              </span>
            )}

            {i !== publication.authors.length - 1 && ", "}
          </>
        ))}
      </div>
      <div className="pub-detail">
        {publication.conference}
        {publication.toappear ? " (To Appear)" : ""}
        {publication.website && (
          <>
            {" "}
            | <a href={publication.website}>website</a>
          </>
        )}
        {publication.pdf && (
          <>
            {" "}
            | <a href={publication.pdf}>PDF</a>
          </>
        )}
        {publication.video && (
          <>
            {" "}
            | <a href={publication.video}>Video</a>
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
