import React from "react";

export default function ViewMode({ aboutData, token, handleEdit }) {
  return (
    <>
      <h3>Front End Developer</h3>
      <span className="greeting">{aboutData.greetings}</span>
      <p
        dangerouslySetInnerHTML={{
          __html: aboutData?.about || aboutData || "No content available.",
        }}
      />
      {/* <p>{aboutData?.about || aboutData || "No content available."}</p> */}
      {token && (
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
      )}
    </>
  );
}
