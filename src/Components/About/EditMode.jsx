import React, { lazy, Suspense } from "react";
import Loader from "../Loader";
const ViewMode = lazy(() => import("./ViewMode"));

export default function EditMode({ newContent, setNewContent, handleSubmit }) {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <>
          <div className="textarea_container">
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Save</button>
          </div>
        </>
      ) : (
        <Suspense fallback={<Loader />}>
          <ViewMode aboutData={newContent} />
        </Suspense>
      )}
    </>
  );
}
