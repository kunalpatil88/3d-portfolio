import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/kunal-warude/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — kunal-warude
              </a>
            </p>
            <p>
              <a href="mailto:Kunalwarude143@gmail.com" data-cursor="disable">
                Kunalwarude143@gmail.com
              </a>
            </p>
            <p>📍 Pune, Maharashtra, India · +91 7558295825</p>
            <h4>Education</h4>
            <p>
              Master of Computer Applications (Integrated MCA), RCPET Institute
              of Management Research and Development — 2017–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/kunalwarude143"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-warude/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:Kunalwarude143@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kunal Warude</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
