import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Alexis Godin</h3>
        <p data-aos="fade-up">
          Vous êtes à un clic de construire le site web ou l'application web de
          vos rêves. Envoyez-moi les détails de votre projet pour un site web
          moderne, adapté aux mobiles et très performant dès aujourd'hui !{" "}
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Contactez-moi
          </a>
          <a href="#portfolio" className="btn light">
            Mon travail
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
