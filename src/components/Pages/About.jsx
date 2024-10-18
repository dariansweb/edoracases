import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";

const About = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".top" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">About</h1>
          <h2 className="light">It takes a team to fulfill a vision</h2>
          <h3 className="light">Join our team!</h3>
        </div>
      </div>
      <div className="pages-container">
        <section>
          <h1 className="dark">About Us</h1>
          <h2 className="dark">
            Make an Impact with Your Talent!{" "}
            <span className="icon-size">🎯</span>
          </h2>

          <div className="text-block">
            <br />
            We’re a diverse group of volunteers from around the world—artists,
            techies, musicians, educators, and more—working together to improve
            human and health services for everyone.{" "}
            <span className="icon-size">💪</span>
            <p>
              {" "}
              <span className="icon-size">✨</span> Got a skill? Bring it!
              Coding, design, organizing, problem-solving—every talent can help
              drive change in our open-source community. Your creativity makes a
              difference, and our project is waiting for <strong>you</strong> to
              leave your mark. <span className="icon-size">👍🏻</span>{" "}
            </p>
            <p>
              {" "}
              <span className="icon-size">🙌</span> Ready to jump in? Let’s make
              something extraordinary, together!{" "}
              <span className="icon-size">🤝🏻</span>{" "}
            </p>
          </div>

          <h2 className="dark">
            Our Vision <span className="icon-size">🌟</span>{" "}
          </h2>
          <div className="text-block">
            We dream of a future where tech and human services go
            hand-in-hand—making life better for everyone, with transparency and
            purpose. <span className="icon-size">💻</span>
            <p>
              {" "}
              By building efficient and intuitive software, we help agencies
              serve communities with more care and efficiency.{" "}
              <span className="icon-size">📈</span> Everyone deserves
              high-quality, accessible services—let’s make that a reality.
            </p>
            <p>
              {" "}
              Join us and be part of the change.{" "}
              <span className="icon-size">🤝</span> Together, we’ll create a
              future where technology brings out the best in humanity.{" "}
            </p>
          </div>

          <h2 className="dark">
            Our Mission <span className="icon-size">💙</span>{" "}
          </h2>
          <div className="text-block">
            We’re here to empower our community—especially those in need. We
            believe in accessible, compassionate services that foster growth and
            resilience. <span className="icon-size">🧠</span>
            <p>
              {" "}
              We unite staff, partners, and stakeholders to make sure everyone’s
              voice is heard and needs are met—bringing hope to those facing
              barriers. <span className="icon-size">💝</span>{" "}
            </p>
            <p>
              {" "}
              Using Event Driven Operations, we stay responsive and proactive,
              meeting needs as they arise. <span className="icon-size">
                🛰️
              </span>{" "}
              It’s all about maximizing impact and creating a supportive
              environment for everyone.
            </p>
            <p>
              {" "}
              Join our mission to uplift lives and transform communities.
              Together, we’ll help everyone thrive and live with dignity.{" "}
              <span className="icon-size">🙌</span>{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
