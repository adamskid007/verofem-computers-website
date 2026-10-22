
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Code2,
  Gift,
  Monitor,
  Palette,
  Printer,
  Sparkles,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Computer Literacy",
    description:
      "Build confidence using computers and essential digital tools for everyday, educational, and professional tasks.",
    features: [
      "Computer fundamentals",
      "Microsoft Office applications",
      "Essential digital skills",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Web Development",
    description:
      "Create modern, responsive websites designed to present your brand, communicate your message, and support your goals.",
    features: [
      "Website design and development",
      "Responsive layouts",
      "Website updates and improvements",
    ],
  },
  {
    icon: Palette,
    number: "03",
    title: "Graphics Design",
    description:
      "Communicate your ideas visually with creative designs for businesses, personal projects, and promotional materials.",
    features: [
      "Promotional designs",
      "Visual content creation",
      "Business design materials",
    ],
  },
  {
    icon: Camera,
    number: "04",
    title: "Photography",
    description:
      "Capture important moments, products, and experiences with photography services tailored to your needs.",
    features: [
      "Photography enquiries",
      "Product and personal photography",
      "Project-specific requests",
    ],
  },
  {
    icon: Printer,
    number: "05",
    title: "Printing Services",
    description:
      "Get help with printing needs for documents, business materials, and other print-ready projects.",
    features: [
      "Document printing",
      "Business materials",
      "Print project enquiries",
    ],
  },
  {
    icon: Gift,
    number: "06",
    title: "Gifts & Souvenirs",
    description:
      "Explore gift and souvenir options for celebrations, special occasions, personal gifts, and business events.",
    features: [
      "Gift enquiries",
      "Souvenir options",
      "Event and occasion requests",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your requirements, ideas, or the service you are interested in.",
  },
  {
    number: "02",
    title: "Discuss the Details",
    description:
      "We can discuss your expectations, project details, and suitable options.",
  },
  {
    number: "03",
    title: "Take the Next Step",
    description:
      "Get in touch to discuss the next steps for your training or service request.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container services-hero__inner">
          <div className="services-hero__content">
            <span className="services-eyebrow">
              <span className="services-eyebrow__line" />
              OUR SERVICES
            </span>

            <h1>
              Solutions for your
              <span> ideas and ambitions.</span>
            </h1>

            <p>
              From computer training and website development to creative
              services, discover how Verofem Computers can help you with your
              digital and business needs.
            </p>

            <div className="services-hero__actions">
              <a href="#all-services" className="services-button">
                Explore Services <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="services-text-link services-text-link--light"
              >
                Discuss Your Needs <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="services-hero__visual">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt="A modern workspace for professional and creative work"
            />

            <div className="services-hero__image-label">
              <Sparkles size={21} />
              <span>Technology meets creativity</span>
            </div>

            <div className="services-hero__decoration" />
          </div>
        </div>
      </section>

      <section
        className="section section--light services-intro"
        id="all-services"
      >
        <div className="container">
          <div className="services-section-heading">
            <span className="services-eyebrow services-eyebrow--dark">
              <span className="services-eyebrow__line" />
              WHAT WE OFFER
            </span>

            <h2>
              One place. Multiple
              <span> possibilities.</span>
            </h2>

            <p>
              Explore our range of services and find the option that best
              matches what you want to learn, create, or accomplish.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="services-card" key={service.number}>
                  <div className="services-card__top">
                    <span className="services-card__icon">
                      <Icon size={27} strokeWidth={1.7} />
                    </span>

                    <span className="services-card__number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="services-card__description">
                    {service.description}
                  </p>

                  <ul className="services-card__features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="services-card__link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire About This Service <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark services-process">
        <div className="container">
          <div className="services-section-heading services-section-heading--dark">
            <span className="services-eyebrow">
              <span className="services-eyebrow__line" />
              HOW TO GET STARTED
            </span>

            <h2>
              Let's turn your
              <span> ideas into action.</span>
            </h2>

            <p>
              Whether you need a service or want to learn a new skill, start by
              telling us what you have in mind.
            </p>
          </div>

          <div className="services-process__grid">
            {processSteps.map((step) => (
              <article className="services-process-card" key={step.number}>
                <span className="services-process-card__number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white services-training">
        <div className="container services-training__grid">
          <div className="services-training__visual">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
              alt="A person working with digital learning materials"
            />
          </div>

          <div className="services-training__content">
            <span className="services-eyebrow services-eyebrow--dark">
              <span className="services-eyebrow__line" />
              BUILD YOUR SKILLS
            </span>

            <h2>
              Looking to learn
              <span> something new?</span>
            </h2>

            <p>
              Explore our training options if you want to improve your computer
              skills, learn web development, or develop your creative abilities.
            </p>

            <Link to="/training" className="services-button">
              Explore Training <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--light services-cta">
        <div className="container">
          <div className="services-cta__panel">
            <div>
              <span className="services-eyebrow services-eyebrow--dark">
                <span className="services-eyebrow__line" />
                HAVE A REQUEST?
              </span>

              <h2>Tell us what you need.</h2>

              <p>
                Contact Verofem Computers to discuss a service, ask a question,
                or find out more about what we offer.
              </p>
            </div>

            <Link to="/contact" className="services-button">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
