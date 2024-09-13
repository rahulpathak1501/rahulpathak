import React from "react";
import ExperienceItem from "./ExperienceItems";

const JobSection = ({ data, title, loading, error }) => (
  <div className="job-section">
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {data.length > 0
      ? data.map((exp) => (
          <ExperienceItem
            key={exp.id}
            jobTitle={exp.jobTitle}
            company={exp.company}
            fromDate={exp.fromDate}
            toDate={exp.toDate || "Present"}
            responsibilities={exp.responsibilities || []}
          />
        ))
      : !loading && <p>Something wrong with {title} database</p>}
  </div>
);

export default JobSection;
