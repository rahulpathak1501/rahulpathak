import React, { lazy, Suspense, useEffect, useState } from "react";
import { db } from "../../Utills/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
const ViewMode = lazy(() => import("./ViewMode"));
const EditMode = lazy(() => import("./EditMode"));

const About = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [aboutData, setAboutData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Firebase document reference
  const docRef = doc(db, "about", "EaCIU1UToA0NEPIhcrLI");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAboutData(docSnap.data());
        } else {
          setError("No document found.");
        }
      } catch (error) {
        setError("Error fetching document.");
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    if (token) {
      setEditMode(true);
      setNewContent(aboutData.about);
    } else {
      alert("You are logged out. Please login again to edit.");
      navigate("#");
    }
  };

  const handleSubmit = async () => {
    if (!token) {
      alert("You are logged out. Please login again to save the content.");
      navigate("#");
    } else {
      try {
        await updateDoc(docRef, { about: newContent });
        setAboutData({ ...aboutData, about: newContent });
        setEditMode(false);
      } catch (error) {
        setError("Error updating document.");
        console.error("Error updating document:", error);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="about" className="about width98">
      <div className="about__content">
        {editMode ? (
          <Suspense fallback={<Loader />}>
            <EditMode
              newContent={newContent}
              setNewContent={setNewContent}
              handleSubmit={handleSubmit}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader />}>
            <ViewMode
              aboutData={aboutData}
              token={token}
              handleEdit={handleEdit}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};

export default About;
