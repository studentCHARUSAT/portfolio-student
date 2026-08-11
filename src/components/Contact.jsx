import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <label>
        Your Message:
      </label>

      <br />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows="5"
        cols="40"
      />

      <p>Characters: {message.length}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp && (
        <p>
          Enter a message above if you would like to contact me.
        </p>
      )}

      <p>Your message: {message}</p>
    </section>
  );
}

export default Contact;