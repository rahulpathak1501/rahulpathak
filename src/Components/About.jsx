import React, { useEffect, useState } from "react";
import { db } from "../Utills/Firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function About() {
  const token = localStorage.getItem("token");
  const [aboutData, setAboutData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "about", "EaCIU1UToA0NEPIhcrLI");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAboutData(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    if (localStorage.getItem("token") !== null) {
      setEditMode(true);
      setNewContent(aboutData.about);
    } else {
      alert("Your are logged out please Login again to edit");
      setEditMode(false);
      navigate("/login");
    }
  };

  const handleSubmit = async () => {
    if (localStorage.getItem("token") === null) {
      alert("You are logged out please login again to Save the content");
      navigate("/login");
    } else {
      try {
        const docRef = doc(db, "about", "EaCIU1UToA0NEPIhcrLI");
        await updateDoc(docRef, { about: newContent });
        setAboutData({ ...aboutData, about: newContent });
        setEditMode(false);
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  };

  return (
    <div id="about" className="about">
      {editMode ? (
        <div className="textarea_container">
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleSubmit}>Save</button>
        </div>
      ) : (
        aboutData && (
          <div>
            <span className="greeting">{aboutData.greetings}</span>
            <p dangerouslySetInnerHTML={{ __html: aboutData.about }} />
            {token !== null && <button onClick={handleEdit}>Edit</button>}
          </div>
        )
      )}
    </div>
  );
}

export default About;
