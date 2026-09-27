import { Bookmark } from "lucide-react";
import "./Card.css";

function Card({ job }) {
  return (
    <div className="card">
      <div className="top">
        <img src={job.logo} alt={job.company} />

        <button>
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <h3>
          {job.company} <span>{job.posted}</span>
        </h3>

        <h2>{job.role}</h2>

        <div className="meta">
          <h4>{job.tag1}</h4>
          <h4>{job.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{job.rate}</h3>
          <p>{job.location}</p>
        </div>

        <button>Apply now</button>
      </div>
    </div>
  );
}

export default Card;
