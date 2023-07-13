import '../assets/scss/WelcomePage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function WelcomePage() {
    return (
      <section id="welcome-page-container">
        <h1 id="welcome-title">
          <p>D. Tettamanti</p>
          <span>Sustentabilidad financiera</span>
        </h1>
        <p id="welcome-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          animi placeat! Culpa quod, quos tenetur debitis adipisci totam?
          Tempore incidunt consectetur magni iste beatae soluta delectus officia
          illum praesentium!
        </p>
        <ul id="welcome-index">
          <li>Mi historia</li>
          <li>Soluciones financieras</li>
          <li>Preguntas frecuentes</li>
          <li>Experiencias</li>
          <li>Socios estratégicos</li>
          <li>Contacto</li>
        </ul>
      </section>
    );
}