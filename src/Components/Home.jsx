import { useEffect } from "react";
import profileImage from "../assests/profileImage.jpg";

function Home() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/");
  // }, []);
  return (
    <div id="home" className="Home">
      <img alt="myImg" src={profileImage} />
      <h1>Rahul Pathak</h1>
    </div>
  );
}

export default Home;
