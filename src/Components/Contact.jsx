import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div id="contact" className="contact">
      <ContactForm />
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/rahul-pathak-00ab2010a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rahulpathak1501?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rahul2.pathak3297@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
        <a href="tel:+916296485672" title="Call us">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}

export default Contact;
