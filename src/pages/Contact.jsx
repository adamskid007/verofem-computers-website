
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Camera,
} from "lucide-react";
import "./Contact.css";

const CONTACT_DETAILS = {
  address: "Head office - 308 Abaranje road, Wazobia Bus-stop, Ikotun, Lagos state, Nigeria.",
  address2: "Branch office - 3, Chukwuemeka Ehidioha street, off Supo Ajayi, Igando/Isheri Expressway Igando, Lagos State, Nigeria.",
  phone: "08134719727",
  phone2: "08068228784",
  email: "info@verofemcomputers.com",
};

const WHATSAPP_NUMBER = "2348134719727";

const INSTAGRAM_USERNAME = "@verofemprints";
const FACEBOOK_USERNAME = "@verofem2";

const SERVICES = [
  "Computer Training",
  "Web Development",
  "Graphics Design",
  "Photography",
  "Printing Services",
  "Gifts & Souvenirs",
  "Other Enquiry",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  const whatsappConfigured = /^\d{8,15}$/.test(WHATSAPP_NUMBER);

  const socialLinks = [
    {
      name: "Tiktok",
      username: INSTAGRAM_USERNAME,
      url: `https://www.tiktok.com/${INSTAGRAM_USERNAME}/`,
      icon: Camera,
    },
    {
      name: "Tiktok 2",
      username: FACEBOOK_USERNAME,
      url: `https://www.tiktok.com/${FACEBOOK_USERNAME}/`,
      icon: ArrowRight,
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (formError) {
      setFormError("");
    }
  }

  function handleWhatsAppSubmit(event) {
    event.preventDefault();
    setFormError("");

    if (!whatsappConfigured) {
      setFormError(
        "Please add Verofem's real WhatsApp number in Contact.jsx before using this form."
      );
      return;
    }

    const message = [
      "Hello Verofem Computers, I would like to make an enquiry.",
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "Not provided"}`,
      `Service: ${formData.service || "Not specified"}`,
      "",
      "Enquiry:",
      formData.message.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__background" aria-hidden="true" />

        <div className="container contact-hero__container">
          <div className="contact-hero__content">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow__line" />
              LET'S CONNECT
            </span>

            <h1>
              We’re here to <span>help you.</span>
            </h1>

            <p>
              Whether you have a question about our services, need information
              about training, or want to discuss a project, we’d love to hear
              from you.
            </p>

            <div className="contact-hero__actions">
              <a
                href="#contact-details"
                className="contact-button contact-button--gold"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>

              <a
                href="#whatsapp-enquiry"
                className="contact-hero__text-link"
              >
                Send an enquiry
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="contact-hero__visual" aria-hidden="true">
            <div className="contact-hero__circle contact-hero__circle--outer" />
            <div className="contact-hero__circle contact-hero__circle--inner" />

            <div className="contact-hero__message-icon">
              <MessageCircle size={75} strokeWidth={1.2} />
              <span>
                <Send size={24} />
              </span>
            </div>

            <div className="contact-hero__floating-label">
              <span className="contact-hero__status-dot" />
              Let’s talk about your next step
            </div>
          </div>
        </div>

        <div className="contact-hero__bottom-line" />
      </section>

      {/* Contact details and social links */}
      <section
        className="contact-main section section--light"
        id="contact-details"
      >
        <div className="container">
          <div className="contact-section-heading">
            <span className="contact-eyebrow contact-eyebrow--dark">
              CONTACT VEROFEM
            </span>

            <h2>Let’s make connecting easy.</h2>

            <p>
              Find our contact details, connect through social media, or
              send your enquiry directly to our WhatsApp account.
            </p>
          </div>

          <div className="contact-details-grid">
            <article className="contact-detail-card">
              <span className="contact-detail-card__icon">
                <MapPin size={23} />
              </span>
              <h3>Visit us</h3>
              <p>{CONTACT_DETAILS.address}</p>
              <br />
              <p>{CONTACT_DETAILS.address2}</p>
              <span className="contact-detail-card__note">
                Our business location
              </span>
            </article>

            <article className="contact-detail-card">
              <span className="contact-detail-card__icon">
                <Phone size={23} />
              </span>
              <h3>Call us</h3>
              <p>{CONTACT_DETAILS.phone}</p>
              <br />
              <p>{CONTACT_DETAILS.phone2}</p>
              <span className="contact-detail-card__note">
                Speak with our team
              </span>
            </article>

            <article className="contact-detail-card">
              <span className="contact-detail-card__icon">
                <Mail size={23} />
              </span>
              <h3>Email us</h3>
              <p>{CONTACT_DETAILS.email}</p>
              <span className="contact-detail-card__note">
                Send us your questions
              </span>
            </article>
          </div>

          <div className="contact-social-panel">
            <div className="contact-social-panel__content">
              <span className="contact-eyebrow contact-eyebrow--dark">
                FOLLOW VEROFEM
              </span>
              <h3>Stay connected with us.</h3>
              <p>
                Follow our social pages for updates, services, creative work,
                and training information.
              </p>
            </div>

            <div className="contact-social-links">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                const isPlaceholder =
                  !social.username ||
                  social.username.startsWith("your_");

                return (
                  <a
                    className={`contact-social-link${
                      isPlaceholder
                        ? " contact-social-link--unconfigured"
                        : ""
                    }`}
                    href={isPlaceholder ? undefined : social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verofem on ${social.name}`}
                    title={
                      isPlaceholder
                        ? `Add the ${social.name} username in Contact.jsx`
                        : `Visit Verofem on ${social.name}`
                    }
                    onClick={
                      isPlaceholder
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                  >
                    <SocialIcon size={22} />
                    <span>{social.name}</span>
                    <ArrowUpRight size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp enquiry form */}
      <section className="contact-enquiry section section--white" id="whatsapp-enquiry">
        <div className="container contact-enquiry__grid">
          <div className="contact-enquiry__intro">
            <span className="contact-eyebrow contact-eyebrow--dark">
              WHATSAPP ENQUIRIES
            </span>

            <h2>
              Tell us what you need. <span>We’ll take it from there.</span>
            </h2>

            <p>
              Fill in the details and select the button to continue to
              WhatsApp. Your information will be arranged into a message
              that you can review and send to Verofem.
            </p>

            <div className="contact-enquiry__steps">
              <div className="contact-enquiry__step">
                <span>01</span>
                <div>
                  <strong>Complete the form</strong>
                  <p>Provide your contact details and enquiry.</p>
                </div>
              </div>

              <div className="contact-enquiry__step">
                <span>02</span>
                <div>
                  <strong>Open WhatsApp</strong>
                  <p>Your message will be prepared automatically.</p>
                </div>
              </div>

              <div className="contact-enquiry__step">
                <span>03</span>
                <div>
                  <strong>Review and send</strong>
                  <p>Send the prepared message to our business number.</p>
                </div>
              </div>
            </div>

            {/* <div className="contact-enquiry__privacy-note">
              <MessageCircle size={19} />
              <p>
                Your browser opens WhatsApp to send the message. This website
                does not store or transmit the form details to a server.
              </p>
            </div> */}
          </div>

          <div className="contact-form-card">
            <div className="contact-form-card__heading">
              <span className="contact-form-card__whatsapp-icon">
                <MessageCircle size={23} />
              </span>

              <div>
                <h3>Send us a message</h3>
                <p>Fields marked with * are required.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email address </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-phone">Phone number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-service">What do you need help with?</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service (optional)</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Your message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can Verofem help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              {formError && (
                <p className="contact-form__error" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="contact-button contact-button--whatsapp"
              >
                <MessageCircle size={19} />
                Continue to WhatsApp
                <ArrowRight size={18} />
              </button>

              {!whatsappConfigured && (
                <p className="contact-form__setup-note">
                  Setup required: replace the WhatsApp number placeholder
                  near the top of Contact.jsx before using this button.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="contact-cta section section--light">
        <div className="container">
          <div className="contact-cta__panel">
            <div>
              <span className="contact-eyebrow contact-eyebrow--dark">
                EXPLORE WHAT WE DO
              </span>
              <h2>Discover how Verofem can help.</h2>
              <p>
                Explore our services and training programmes to find the
                right starting point for your goals.
              </p>
            </div>

            <div className="contact-cta__actions">
              <Link
                to="/services"
                className="contact-button contact-button--dark"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link to="/training" className="contact-cta__text-link">
                View Training
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
