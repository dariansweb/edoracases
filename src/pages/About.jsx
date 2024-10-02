import React from "react";
import "./styles/Pages.css"; // Importing a separate CSS file for styling

const About = () => {
  return (
    <div className="pages-container">
      <h1>About Us</h1>
      <p>
        Welcome to our application! We are dedicated to providing comprehensive
        resources and support for individuals and families in need.
      </p>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower our community by offering accessible
          services that promote well-being and personal growth. We strive to
          make a positive impact through collaboration and advocacy.
        </p>
      </section>

      <section>
        <h2>Meet Our Team</h2>
        <div>
          <h3>Darian Ross</h3>
          <p>Executive Director</p>
          <p>
            Darian has over 15 years of experience in community service and is
            passionate about making a difference in people’s lives.
          </p>
        </div>
        <div>
          <h3>John Forgedama</h3>
          <p>Program Manager</p>
          <p>
            John oversees our programs and ensures that we deliver high-quality
            services to our clients.
          </p>
        </div>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about our
          services, please reach out to us at:
        </p>
        <p>dariansweb@gmail.com</p>
      </section>
    </div>
  );
};

export default About;
