import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons"

import "../assets/scss/ContactSection.scss";

export default function ContactSection() {
    return (
      <footer id="footer-container">
        <h2 id="footer-title">Contacto</h2>
        <div id="footer-buttons-container">
          <a
            href="https://calendly.com/dtettamanti/45min"
            target="_blank"
            id="footer-meeting-button"
          >
            <p>Agendemos una reunion</p>
          </a>
          <ul id="footer-contact-buttons">
            <li>
              <a href="" target="_blank" className="footer-contact-button">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" className="footer-contact-button">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" className="footer-contact-button">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" className="footer-contact-button">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" className="footer-contact-button">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}