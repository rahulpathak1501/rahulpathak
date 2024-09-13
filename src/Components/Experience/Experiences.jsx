import React from "react";
import "../../CSSFiles/experience.css";
import useFetchCollectionData from "../../customHooks/useFetchCollectionData";
import JobSection from "./JobSection";

export default function Experience() {
  const {
    data: job1Data,
    error: job1Error,
    loading: job1Loading,
  } = useFetchCollectionData("Job1");
  const {
    data: wiproData,
    error: wiproError,
    loading: wiproLoading,
  } = useFetchCollectionData("wipro");

  return (
    <section className="container text-center section-padding" id="experiences">
      <h1 className="arrow">
        <span>Experience</span>
      </h1>
      <JobSection
        data={job1Data}
        title="TCS"
        loading={job1Loading}
        error={job1Error}
      />
      <JobSection
        data={wiproData}
        title="Wipro"
        loading={wiproLoading}
        error={wiproError}
      />
    </section>
  );
}
