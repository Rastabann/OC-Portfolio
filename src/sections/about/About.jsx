import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv_port.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>Je me présente</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Construire des projets que mes clients aiment a toujours été ma
            passion. Travaillant dans l'industrie du développement web depuis
            presque un an et ayant servi plus de 10 clients satisfaits dans le
            monde entier, je suis toujours motivé pour en faire plus !
          </p>
          <p>
            Bonjour, je m'appelle Alexis Godin et je viens de Mons, en Belgique.
            Je suis un développeur web fraichement diplômé. Ma priorité est de
            placer votre entrprise au sommet de la transformation digitale, en
            vous donnant toutes les clés dont vous avez besoin pour vous
            démarquer en ligne sans problème. Contactez-moi dès aujourd'hui pour
            me faire part des détails de votre projet. Consultez mon CV
            ci-dessous.
          </p>
          <a href={CV} download className="btn primary">
            Télécharger le CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
