import { useEffect, useState } from "react";

import "../CSSFiles/resume.css";

import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Utills/Firebase";

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        const resumeRef = ref(
          storage,
          "gs://myprotfolio-login.appspot.com/front-end_RahulPathak-resume.pdf"
        );
        const url = await getDownloadURL(resumeRef);
        setResumeUrl(url);
      } catch (error) {
        console.error("Error fetching resume URL:", error);
      }
    };

    fetchResumeUrl();
  }, []);

  return (
    <div className="resume-container">
      {resumeUrl ? (
        <>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            {/* <button className="btn">Download Resume</button> */}
          </a>
          <iframe src={resumeUrl} className="resume-iframe" title="Resume" />
        </>
      ) : (
        <p className="resume-loading">Loading resume...</p>
      )}
    </div>
  );
};

export default Resume;
