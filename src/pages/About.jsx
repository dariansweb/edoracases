import React from "react";
import "./styles/About.css"; // Importing a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-introduction">
        Welcome to our application! We are dedicated to providing comprehensive resources and support for individuals and families in need.
      </p>

      <section className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to empower our community by offering accessible services that promote well-being and personal growth. We strive to make a positive impact through collaboration and advocacy.
        </p>
      </section>

      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-member">
          <h3 className="member-name">Darian Ross</h3>
          <p className="member-role">Executive Director</p>
          <p className="member-bio">
            Darian has over 15 years of experience in community service and is passionate about making a difference in people’s lives.
          </p>
        </div>
        <div className="team-member">
          <h3 className="member-name">John Forgedama</h3>
          <p className="member-role">Program Manager</p>
          <p className="member-bio">
            John oversees our programs and ensures that we deliver high-quality services to our clients.
          </p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-info">
          If you have any questions or would like to learn more about our services, please reach out to us at:
        </p>
        <p className="contact-email">dariansweb@gmail.com</p>
      </section>
    </div>
  );
};

export default About;
