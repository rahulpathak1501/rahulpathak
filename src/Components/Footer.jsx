import React from "react";
import "../CSSFiles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              All Rights Reserved. &copy; 2024{" "}
              <a
                href="http://www.themewagon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rahul Pathak
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
