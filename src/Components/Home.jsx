import { useEffect } from "react";
import profileImage from "../assets/profileImage.jpg";

function Home() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/");
  // }, []);
  return (
    <section id="home" className="home width98">
      <img alt="myImg" src={profileImage} />
      <h1>Rahul Pathak</h1>
    </section>
  );
}

export default Home;
