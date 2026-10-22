import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Handshake,
  Lightbulb,
  Monitor,
  Palette,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";
import "./About.css";

const coreValues = [
  {
    icon: Truck,
    number: "01",
    title: "Delivery",
    description:
      "We value dependable delivery of products, services, and solutions that meet our customers' needs.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Expertise",
    description:
      "We value knowledge, professional competence, and continuous improvement in the work we do.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Integrity",
    description:
      "We believe in honesty, trust, and doing business with responsibility and transparency.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Customer Satisfaction",
    description:
      "We put our customers' needs and experiences at the centre of the solutions and services we provide.",
  },
];

const capabilities = [
  "Computer literacy and digital skills",
  "Web development and website creation",
  "Graphics design and visual communication",
  "Creative and business support services",
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <span className="about-eyebrow">
              <span className="about-eyebrow__line" />
              ABOUT VEROFEM
            </span>

            <h1>
              Technology with purpose.
              <span> Service with excellence.</span>
            </h1>

            <p>
              At Verofem Computers, our focus is on delivering products,
              services, and solutions that create value for our customers.
              Discover the vision, mission, and values that guide our work.
            </p>

            <div className="about-hero__actions">
              <Link to="/services" className="about-button about-button--gold">
                Explore Our Services <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="about-text-link about-text-link--light"
              >
                Get in Touch <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1100&q=85"
                alt="A modern professional workspace"
              />
            </div>

            <div className="about-hero__floating-card">
              <span className="about-hero__floating-icon">
                <Monitor size={23} />
              </span>
              <div>
                <strong>Our Commitment</strong>
                <p>Value, quality, and customer satisfaction</p>
              </div>
            </div>

            <div className="about-hero__decor" />
          </div>
        </div>
      </section>

      <section className="section section--light about-intro">
        <div className="container about-intro__grid">
          <div className="about-section-heading">
            <span className="about-eyebrow about-eyebrow--dark">
              <span className="about-eyebrow__line" />
              WHO WE ARE
            </span>

            <h2>
              Focused on value.
              <span> Driven by our customers.</span>
            </h2>
          </div>

          <div className="about-intro__copy">
            <p>
              At Verofem Computers, our commitment to customers shapes how we
              approach our products, services, and solutions. We aim to deliver
              value through dedication, expertise, and a strong focus on
              customer needs.
            </p>

            <p>
              Our vision and mission provide direction for our work, while our
              four core values help keep us focused on delivering better
              customer experiences and building lasting trust.
            </p>

            <Link to="/contact" className="about-text-link">
              Talk to our team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white about-purpose">
        <div className="container about-purpose__grid">
          <article className="about-purpose-card about-purpose-card--vision">
            <span className="about-purpose-card__icon">
              <Target size={28} strokeWidth={1.7} />
            </span>

            <span className="about-purpose-card__eyebrow">OUR VISION</span>

            <h2>Setting our sights on excellence.</h2>

            <p>
              To be the world’s number one in products, services and solutions
              that delivers best customer value and customer satisfaction
              faster and better than our contemporaries.
            </p>
          </article>

          <article className="about-purpose-card about-purpose-card--mission">
            <span className="about-purpose-card__icon">
              <Lightbulb size={28} strokeWidth={1.7} />
            </span>

            <span className="about-purpose-card__eyebrow">OUR MISSION</span>

            <h2>Growth through service and dedication.</h2>

            <p>
              To obtain profitable growth through outstanding customer service,
              dedication and excellence.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--light about-values-section">
        <div className="container">
          <div className="about-section-heading about-section-heading--center">
            <span className="about-eyebrow about-eyebrow--dark">
              <span className="about-eyebrow__line" />
              WHAT WE STAND FOR
            </span>

            <h2>
              Meet our four
              <span> core values.</span>
            </h2>

            <p>
              Our core values have kept us focused on executing our customers’
              needs and satisfaction. These four pillars guide the way we
              approach our work and serve our customers.
            </p>
          </div>

          <div className="about-values">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <span className="about-value-card__number">
                    {value.number}
                  </span>

                  <span className="about-value-card__icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark about-capabilities">
        <div className="container about-capabilities__grid">
          <div className="about-capabilities__content">
            <span className="about-eyebrow">
              <span className="about-eyebrow__line" />
              WHAT WE DO
            </span>

            <h2>
              Products, services, and solutions
              <span> for our customers.</span>
            </h2>

            <p>
              We bring together technology and creative services to support
              different customer needs. Explore some of the areas in which
              Verofem Computers operates.
            </p>

            <ul className="about-capabilities__list">
              {capabilities.map((capability) => (
                <li key={capability}>
                  <CheckCircle2 size={19} />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="about-button about-button--gold"
            >
              View Our Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-capabilities__cards">
            <article className="about-capability-card">
              <span className="about-capability-card__icon">
                <BookOpen size={26} />
              </span>
              <h3>Computer Training</h3>
              <p>Develop digital knowledge and practical computer skills.</p>
            </article>

            <article className="about-capability-card">
              <span className="about-capability-card__icon">
                <Code2 size={26} />
              </span>
              <h3>Web Development</h3>
              <p>Build websites and digital experiences for different needs.</p>
            </article>

            <article className="about-capability-card about-capability-card--wide">
              <span className="about-capability-card__icon">
                <Palette size={26} />
              </span>
              <h3>Graphics & Creative Services</h3>
              <p>
                Explore design and other creative services that help bring
                ideas to life.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--white about-commitment">
        <div className="container about-commitment__inner">
          <span className="about-commitment__icon">
            <Users size={28} />
          </span>

          <div className="about-commitment__content">
            <span className="about-eyebrow about-eyebrow--dark">
              OUR COMMITMENT
            </span>

            <h2>Our customers remain at the heart of what we do.</h2>

            <p>
              Our vision, mission, and core values remind us to stay focused on
              customer value, dedicated service, integrity, and satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--light about-cta">
        <div className="container">
          <div className="about-cta__panel">
            <div>
              <span className="about-eyebrow about-eyebrow--dark">
                <span className="about-eyebrow__line" />
                LET’S CONNECT
              </span>

              <h2>How can Verofem Computers help you?</h2>

              <p>
                Explore our services, discover our training options, or contact
                us to discuss what you need.
              </p>
            </div>

            <div className="about-cta__actions">
              <Link
                to="/training"
                className="about-button about-button--gold"
              >
                Explore Training <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="about-button about-button--outline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;