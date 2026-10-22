
import { Link } from "react-router-dom";
import {
  Monitor,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import "./Footer.css";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Training", path: "/training" },
  { label: "Contact Us", path: "/contact" },
];

const footerServices = [
  "Computer Literacy",
  "Web Development",
  "Graphics Design",
  "Photography",
  "Printing & Souvenirs",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand-column">
          <Link to="/" className="footer__brand">
            <span className="footer__logo-icon">
                <img src="images/verofem-logo.jpg" />
            </span>

            <span className="footer__brand-name">
              VEROFEM
              <span> COMPUTERS</span>
            </span>
          </Link>

          <p className="footer__description">
            Empowering people with practical digital skills and delivering
            creative technology, photography, printing, and business services.
          </p>

          <p className="footer__tagline">
            Technology. Creativity. Excellence.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>

          <ul className="footer__list">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer__link">
                  <ArrowUpRight size={14} />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Our Services</h3>

          <ul className="footer__list">
            {footerServices.map((service) => (
              <li key={service}>
                <Link to="/services" className="footer__link">
                  <ArrowUpRight size={14} />
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column footer__contact-column">
          <h3 className="footer__heading">Get in Touch</h3>

          <p className="footer__contact-intro">
            Have a question about our services or training programmes?
            We would be happy to hear from you.
          </p>

          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <MapPin size={18} />
              <span>Head office - 308 Abaranje road, Wazobia Bus-stop, Ikotun, Lagos State, Nigeria.</span>
            </li>

            <li className="footer__contact-item">
              <MapPin size={18} />
              <span>Branch office - 3, Chukwuemeka Ehidioha street, off Supo Ajayi, Igando/Isheri Expressway Igando, Lagos State, Nigeria.</span>
            </li>

            <li className="footer__contact-item">
              <Phone size={18} />
              <span>+234 813 471 9727</span>
            </li>

            <li className="footer__contact-item">
              <Phone size={18} />
              <span>+234 806 822 8784</span>
            </li>

            <li className="footer__contact-item">
              <Mail size={18} />
              <span>info@verofemcomputers.com</span>
            </li>
          </ul>

          <Link to="/contact" className="footer__contact-cta">
            Contact our team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>
            © {new Date().getFullYear()} Verofem Computers. All rights
            reserved.
          </p>

          <p className="footer__bottom-note">
            Built around skills, creativity and technology.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
