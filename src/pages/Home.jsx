
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Code2,
  Palette,
  Camera,
  Printer,
  Gift,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import "./Home.css";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Microsoft Office full package",
    description:
      "Build essential computing skills, it offers comprehensive, hands-on learning of Word, Excel, PowerPoint, Outlook and other tools to boost productivity, career skills, and professional confidence.",
    link: "/training",
  },
  {
    icon: Code2,
    number: "02",
    title: "Web Development",
    description:
      "Learn the comprehensive, hands-on program that equips learners with the skills to create professional, responsive and visually appealing websites tailored to modern business needs. ",
    link: "/training",
  },
  {
    icon: Palette,
    number: "03",
    title: "Graphics Design",
    description:
      "Explore visual communication and creative design for personal, educational, and business needs.",
    link: "/training",
  },
  {
    icon: Camera,
    number: "04",
    title: "Photography",
    description:
      "Capture important moments and tell stories through professional photography services.",
    link: "/services",
  },
  {
    icon: Printer,
    number: "05",
    title: "Printing Services",
    description:
      "Get printing solutions for everyday needs, business materials, events, and larger projects.",
    link: "/services",
  },
  {
    icon: Gift,
    number: "06",
    title: "Gifts & Souvenirs",
    description:
      "Explore gift and souvenir options for celebrations, special occasions, and business events.",
    link: "/services",
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__background" aria-hidden="true" />

        <div className="home-hero__container container">
          <div className="home-hero__content">
            <span className="home-eyebrow home-hero__eyebrow">
              <span className="home-eyebrow__line" />
              VEROFEM COMPUTERS
            </span>

            <h1 className="home-hero__title">
              Where Technology
              <br />
              Meets <span>Creativity.</span>
            </h1>

            <p className="home-hero__description">
              Develop practical digital skills, bring creative ideas to life,
              and access technology and business services designed around
              your needs.
            </p>

            <div className="home-hero__actions">
              <Link to="/training" className="home-button home-button--gold">
                Explore Our Training
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="home-button home-button--outline"
              >
                Discover Our Services
              </Link>
            </div>

            <div className="home-hero__note">
              <Sparkles size={17} />
              <span>
                Learn new skills. Create with purpose. Grow with technology.
              </span>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__image-frame">
              <img
                className="home-hero__image"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                alt="People collaborating in a modern creative workspace"
                fetchPriority="high"
              />

              <div className="home-hero__image-shade" />

              <div className="home-hero__image-caption">
                <span className="home-hero__caption-mark">
                  <Monitor size={23} />
                </span>

                <span>
                  <strong>Skills for today.</strong>
                  <small>Possibilities for tomorrow.</small>
                </span>
              </div>
            </div>

            <div className="home-hero__gold-shape" aria-hidden="true" />

            <div className="home-hero__floating-card">
              <span className="home-hero__floating-icon">
                <GraduationCap size={23} />
              </span>

              <span>
                <strong>Learn & Create</strong>
                <small>Build your digital skills</small>
              </span>
            </div>
          </div>
        </div>

        <div className="home-hero__bottom-line" />
      </section>

      {/* Introduction */}
      <section className="home-intro section section--light">
        <div className="container home-intro__grid">
          <div className="home-intro__heading">
            <span className="home-eyebrow">
              <span className="home-eyebrow__line" />
              WELCOME TO VEROFEM
            </span>

            <h2>
              Practical Skills.
              <br />
              <span>Creative Possibilities.</span>
            </h2>
          </div>

          <div className="home-intro__content">
            <p>
              At Verofem Computers, we bring digital learning, creative
              services, and practical business solutions together in one
              place.
            </p>

            <p>
              Whether you want to improve your computer skills, explore web
              development, develop your graphic design abilities, or get printing and
              photography services, we are here to help you take the next step.
            </p>
            <p>
                Here at Verofem, we have a culture of excellent job delivery, time management  and professional skills to meet the specific needs of all our clients irrespective of the size of their business.

                Our services are affordable and easy to understand as we carry our clients through the process needed to grasp what the content of their project really entails and how we execute them.
            </p>
            <p>
                 We also have a team of professionals ready to execute your project in the most simple and amazing way possible.
            </p>
            <p>
                Reach us today for an amazing experience because that is only what we offer.
            </p>

            <Link to="/about" className="home-text-link">
              Get to know us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-services section section--white">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">
                <span className="home-eyebrow__line" />
                WHAT WE DO
              </span>

              <h2 className="home-section-heading__title">
                Services That <span>Move You Forward.</span>
              </h2>

              <p className="home-section-heading__description">
                From digital education to creative production, discover the
                services available at Verofem Computers.
              </p>
            </div>

            <Link
              to="/services"
              className="home-button home-button--dark"
            >
              View All Services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-services__grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="home-service-card" key={service.number}>
                  <div className="home-service-card__top">
                    <span className="home-service-card__icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>

                    <span className="home-service-card__number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    to={service.link}
                    className="home-service-card__link"
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore service
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training feature */}
      <section className="home-training section">
        <div className="container">
          <div className="home-training__panel">
            <div className="home-training__content">
              <span className="home-eyebrow home-eyebrow--light">
                <span className="home-eyebrow__line" />
                LEARN SOMETHING NEW
              </span>

              <h2>
                Your Next Skill
                <br />
                Could Change <span>Everything.</span>
              </h2>

              <p>
                Take the next step in your digital journey. Explore training
                in Microsoft office full package, web development, and graphics
                design, and find a learning path that matches your goals.
              </p>

              <Link
                to="/training"
                className="home-button home-button--gold"
              >
                Explore Training Programmes
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="home-training__visual">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
                alt="Computer equipment on a desk ready for digital learning"
                loading="lazy"
              />

              <div className="home-training__image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="home-why section section--light">
        <div className="container home-why__grid">
          <div className="home-why__content">
            <span className="home-eyebrow">
              <span className="home-eyebrow__line" />
              THE VEROFEM APPROACH
            </span>

            <h2>
              A Place to Learn,
              <br />
              <span>Create and Connect.</span>
            </h2>

            <p>
              We bring learning and practical services together to support
              individuals, learners, and businesses with their digital and
              creative needs.
            </p>

            <Link to="/about" className="home-text-link">
              Learn more about us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="home-why__points">
            <div className="home-why-point">
              <span className="home-why-point__icon">
                <CheckCircle2 size={23} />
              </span>

              <div>
                <h3>Practical Learning</h3>
                <p>
                  Explore digital skills with a focus on useful, real-world
                  applications.
                </p>
              </div>
            </div>

            <div className="home-why-point">
              <span className="home-why-point__icon">
                <CheckCircle2 size={23} />
              </span>

              <div>
                <h3>Creative Solutions</h3>
                <p>
                  Access design, photography, printing, and gift services for
                  different needs.
                </p>
              </div>
            </div>

            <div className="home-why-point">
              <span className="home-why-point__icon">
                <CheckCircle2 size={23} />
              </span>

              <div>
                <h3>Multiple Services, One Place</h3>
                <p>
                  Find digital training and creative business services through
                  one convenient destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <span className="home-eyebrow home-eyebrow--light">
              <span className="home-eyebrow__line" />
              LET'S GET STARTED
            </span>

            <h2>
              Have a Project or
              <br />
              a Skill in Mind?
            </h2>

            <p>
              Tell us what you want to learn or the service you need. Let's
              explore how Verofem Computers can help.
            </p>
          </div>

          <Link
            to="/contact"
            className="home-button home-button--gold"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
