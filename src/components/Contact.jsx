import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <h1>Let&apos;s build something useful.</h1>
          <p>
            Have a project idea, a question, or an opportunity to share?
            Send a message and I&apos;ll get back to you soon.
          </p>

          <div className="contact-details" aria-label="Contact information">
            <div>
              <span className="contact-detail-label">Availability</span>
              <strong>Open to opportunities</strong>
            </div>
            <div>
              <span className="contact-detail-label">Response time</span>
              <strong>Usually within 2 days</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Tell me a little about your project..."
              maxLength="500"
              required
            />
          </label>

          <div className="contact-form-footer">
            <span className="character-count">{message.length} / 500</span>
            <button type="submit">Send message</button>
          </div>

          <button
            className="help-toggle"
            type="button"
            onClick={() => setShowHelp(!showHelp)}
          >
            {showHelp ? "Hide message tips" : "Need help writing it?"}
          </button>

          {showHelp && (
            <p className="contact-help">
              A short description of your idea, timeline, and what you need
              help with is a great place to start.
            </p>
          )}

          {submitted && (
            <p className="contact-status" role="status">
              Thanks, {name}. Your message is ready to be reviewed.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;