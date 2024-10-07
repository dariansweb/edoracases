import React from "react";
import ScrollToDiv from "../utils/ScrollToDiv";

const Aging = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".hero-container" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">AABHS</h1>
          <h2 className="light">Aging and Adult Services</h2>
          <h2 className="light">- Behavioral Services</h2>
          <h3 className="light">Client Management Solutions</h3>
        </div>
      </div>

      <div className="pages-container">
        <section>
          <h2 class="dark">Why EDORA?</h2>
          <div className="text-block">
            EDORA is more than just a case management system; it is a
            transformative tool that empowers AABHS to fulfill its mission of
            providing essential services with efficiency and effectiveness.
            <p>
              By implementing EDORA, we are not just improving operational
              efficiency; we are fundamentally enhancing the quality of life for
              those we serve. Together, we are building a brighter future for
              all Arkansans, where everyone has the opportunity to thrive, live
              independently, and age gracefully in their own homes and
              communities. Join us in our mission to support those who need it
              most!
            </p>
          </div>
          <h3 className="dark">Streamlined Service Delivery</h3>
          <div className="text-block">
            EDORA integrates all aspects of client management, allowing our
            staff to access vital information quickly. This streamlining means
            faster responses to client needs, ensuring that individuals receive
            timely assistance tailored to their specific situations.
          </div>
          <h3 className="dark">Enhanced Communication</h3>
          <div className="text-block">
            With EDORA, communication between departments is seamless. This
            capability enables our teams to collaborate efficiently, sharing
            insights and updates that lead to comprehensive support for clients
            and their families.
          </div>
          <h3 className="dark">Data-Driven Decision Making</h3>
          <div className="text-block">
            EDORA harnesses the power of analytics, providing actionable
            insights that help us monitor service outcomes and make informed
            adjustments. By utilizing real-time data, we can anticipate client
            needs, adapt our programs, and allocate resources effectively.
          </div>
          <h3 className="dark">Proactive Client Engagement</h3>
          <div className="text-block">
            EDORA's event-driven architecture allows us to proactively identify
            and respond to client needs and regulatory changes. This proactive
            approach ensures we stay ahead of challenges, enhancing our ability
            to support Arkansans as their circumstances evolve.
          </div>
          <h3 className="dark">Accountability and Transparency</h3>
          <div className="text-block">
            EDORA establishes clear protocols and responsibilities, fostering
            accountability within our teams. This transparency builds trust with
            clients, ensuring they feel supported and valued throughout their
            journey with us.
          </div>
        </section>
      </div>
    </>
  );
};

export default Aging;
