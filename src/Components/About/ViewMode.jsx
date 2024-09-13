import React from "react";

export default function ViewMode({ aboutData, token, handleEdit }) {
  // console.log(aboutData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="arrow">
            A little <span>about</span> me
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: aboutData?.about || aboutData || "No content available.",
            }}
          ></p>
          {token && (
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
