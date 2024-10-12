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
        <h1 className="dark">About Us</h1>
        <section>
          <div className="text-block">
            We are a vibrant tapestry of volunteers hailing from every corner of
            the globe, united by a singular purpose: to revolutionize human and
            health services for the greater good. Our team isn’t just a bunch of
            tech whizzes; we’re a lively crew of artists, musicians, educators,
            and data wizards—all rolling up our sleeves to make a difference.
            <p>
              This is open-source at its finest—an ever-evolving collaboration
              where your unique skills, whether they be in coding, graphic
              design, community organizing, or even good old-fashioned
              problem-solving, can spark innovation. By opening our work to the
              world, we’re crafting solutions that are not only transparent and
              adaptable but also reflect the rich diversity of our community.
            </p>
            <p>
              {" "}
              So, if you’re ready to jump into the mix and add your flavor, come
              on in! This is where your passion and creativity can drive real
              change, and together, we can create something truly extraordinary.
            </p>
          </div>
          <h2 className="dark">Our Vision</h2>
          <div className="text-block">
            Our vision is to create a future where technology and human services
            work in harmony, driving positive change and accountability.
            Together, we are committed to making a difference, ensuring that
            governmental agencies can fulfill their mission of serving the
            community with transparency and purpose.
            <p>
              We believe that everyone deserves access to high-quality services
              that address their unique challenges. By developing intuitive and
              efficient software solutions, we aim to enhance the operational
              capacity of agencies, allowing them to serve their clients more
              effectively and compassionately.
            </p>
            <p>
              Join us on this journey as we strive to bring the best we have to
              offer, fostering a supportive environment for those who need it
              most.
            </p>
          </div>
          <h2 className="dark">Our Mission</h2>
          <div className="text-block">
            At the heart of our mission is a profound commitment to empower
            every member of our community, especially those who are vulnerable
            and in need of support. We strive to provide accessible,
            compassionate, and comprehensive services that promote well-being,
            resilience, and personal growth.
            <p>
              We recognize that individuals facing challenges—whether due to
              health issues, personal circumstances, or societal
              barriers—deserve timely and appropriate assistance that meets
              their unique needs. By fostering a collaborative environment that
              unites our staff, community partners, and stakeholders, we
              advocate for those we serve, ensuring that their voices are heard
              and their needs are met.
            </p>
            <p>
              In our pursuit of excellence, we leverage Event Driven Operations
              to focus on the critical events and triggers that impact service
              delivery. This proactive approach enables us to respond swiftly to
              the evolving needs of our clients, maximizing our agency's
              resources and operational capacity to create a more responsive and
              adaptive framework.
            </p>
            <p>
              We are dedicated to making a lasting positive impact, enhancing
              client outcomes, and supporting the overall health and well-being
              of our community. Together, we aim to build a compassionate
              network of support that uplifts those who are hurting, helping
              them navigate their journeys toward healing and empowerment.
            </p>
            <p>
              Join us in our mission to transform lives through service,
              advocacy, and collaboration, ensuring that everyone in our
              community has the opportunity to thrive and live with dignity.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
