
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Laptop,
  Palette,
  Presentation,
  Sparkles,
  Users,
} from "lucide-react";
import "./Training.css";

const trainingCourses = [
  {
    number: "01",
    icon: Laptop,
    title: "Computer Literacy",
    description:
      "Build confidence using computers and essential digital tools for work, education, and everyday tasks.",
    topics: [
      "Computer fundamentals",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
    tag: "Digital foundations",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Learn how websites are structured, styled, and made interactive through practical web development skills.",
    topics: [
      "HTML and CSS",
      "JavaScript fundamentals",
      "Responsive web design",
      "Building website projects",
    ],
    tag: "Build for the web",
  },
  {
    number: "03",
    icon: Palette,
    title: "Graphics Design",
    description:
      "Explore visual communication and learn to create designs for brands, businesses, and digital platforms.",
    topics: [
      "Design principles",
      "CorelDRAW fundamentals",
      "Layout and typography",
      "Creative design projects",
    ],
    tag: "Create visually",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Office Productivity",
    description:
      "Develop useful workplace skills for preparing documents, organising information, and presenting ideas.",
    topics: [
      "Document formatting",
      "Spreadsheets and calculations",
      "Presentations",
      "Digital file management",
    ],
    tag: "Work smarter",
  },
];

const learningBenefits = [
  {
    icon: BookOpen,
    title: "Structured learning",
    description:
      "Learn concepts in a clear sequence, from the fundamentals to practical application.",
  },
  {
    icon: Laptop,
    title: "Practical activities",
    description:
      "Reinforce your learning through guided exercises and projects relevant to each subject.",
  },
  {
    icon: Users,
    title: "Supportive guidance",
    description:
      "Get guidance as you learn, practise new skills, and work through challenges.",
  },
];

function Training() {
  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="training-hero__image" aria-hidden="true" />

        <div className="container training-hero__container">
          <div className="training-hero__content">
            <span className="training-eyebrow">
              <span className="training-eyebrow__line" />
              LEARN. PRACTISE. GROW.
            </span>

            <h1>
              <span>Turn your curiosity into practical skills.</span>
            </h1>

            <p>
              Develop useful digital and creative skills with training
              designed to help you learn with confidence and apply what you
              know.
            </p>

            <div className="training-hero__actions">
              <Link to="/contact" className="training-button training-button--gold">
                Enquire About Training
                <ArrowRight size={18} />
              </Link>

              <a
                href="#training-courses"
                className="training-text-link training-text-link--light"
              >
                Explore programmes
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="training-hero__note">
              <Sparkles size={17} />
              <span>Build skills. Create opportunities.</span>
            </div>
          </div>

          <div className="training-hero__visual">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
              alt="Learners working with digital technology"
            />
            <div className="training-hero__floating-card">
              <span className="training-hero__floating-icon">
                <BookOpen size={22} />
              </span>
              <div>
                <strong>Learn by doing</strong>
                <span>Knowledge into practice</span>
              </div>
            </div>
          </div>
        </div>

        <div className="training-hero__bottom-line" />
      </section>

      <section className="training-intro section section--light">
        <div className="container training-intro__grid">
          <div className="training-intro__heading">
            <span className="training-eyebrow training-eyebrow--dark">
              YOUR LEARNING JOURNEY
            </span>
            <h2>
              Skills that move you <span>forward.</span>
            </h2>
          </div>

          <div className="training-intro__text">
            <p>
              Technology continues to create new ways to learn, work, and
              express ideas. The right skills can help you take part in these
              opportunities and approach new challenges with confidence.
            </p>
            <p>
              Verofem provides learning opportunities across computer
              literacy, web development, and creative design. Explore the
              areas below to find a programme that matches your interests.
            </p>
          </div>
        </div>
      </section>

      <section
        className="training-courses section section--white"
        id="training-courses"
      >
        <div className="container">
          <div className="training-section-heading">
            <div>
              <span className="training-eyebrow training-eyebrow--dark">
                EXPLORE YOUR OPTIONS
              </span>
              <h2>Training programmes</h2>
              <p>
                Discover practical areas of learning for your personal and
                professional development.
              </p>
            </div>

            <span className="training-section-heading__decoration">
              <BookOpen size={30} />
            </span>
          </div>

          <div className="training-course-grid">
            {trainingCourses.map((course) => {
              const CourseIcon = course.icon;

              return (
                <article className="training-course-card" key={course.number}>
                  <div className="training-course-card__top">
                    <span className="training-course-card__number">
                      {course.number}
                    </span>
                    <span className="training-course-card__icon">
                      <CourseIcon size={25} strokeWidth={1.7} />
                    </span>
                  </div>

                  <span className="training-course-card__tag">
                    {course.tag}
                  </span>

                  <h3>{course.title}</h3>
                  <p className="training-course-card__description">
                    {course.description}
                  </p>

                  <div className="training-course-card__divider" />

                  <h4>Areas covered</h4>
                  <ul>
                    {course.topics.map((topic) => (
                      <li key={topic}>
                        <CheckCircle2 size={16} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="training-course-card__link"
                    aria-label={`Enquire about ${course.title}`}
                  >
                    Enquire about this programme
                    <ArrowUpRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="training-courses__note">
            Contact us to confirm current course availability, schedules,
            fees, and programme details.
          </p>
        </div>
      </section>

      <section className="training-benefits section section--dark">
        <div className="container">
          <div className="training-benefits__heading">
            <span className="training-eyebrow">
              THE VEROFEM APPROACH
            </span>
            <h2>
              A learning experience built around <span>your growth.</span>
            </h2>
            <p>
              Build a strong foundation, practise your skills, and keep
              developing your abilities one step at a time.
            </p>
          </div>

          <div className="training-benefits__grid">
            {learningBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <article className="training-benefit" key={benefit.title}>
                  <div className="training-benefit__top">
                    <span className="training-benefit__number">
                      0{index + 1}
                    </span>
                    <BenefitIcon size={28} strokeWidth={1.6} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="training-cta section section--light">
        <div className="container">
          <div className="training-cta__panel">
            <div className="training-cta__content">
              <span className="training-eyebrow">
                TAKE THE NEXT STEP
              </span>
              <h2>Ready to start learning?</h2>
              <p>
                Tell us what you would like to learn, and contact our team
                for information about available training options.
              </p>
              <Link
                to="/contact"
                className="training-button training-button--gold"
              >
                Contact Verofem
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="training-cta__icon" aria-hidden="true">
              <BookOpen size={100} strokeWidth={1} />
              <span>
                <Sparkles size={24} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Training;
