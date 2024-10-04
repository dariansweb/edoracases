import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import "./styles/Pages.css"; // Link to the specific CSS for this component

const Aging = () => {
  return (
    <>
      <ScrollToTop />
      <div className="pages-container">
        <h1 className="dark">
          Division of Aging, Adult, and Behavioral Health Services
        </h1>
        <h2 class="dark">Why EDORA?</h2>
        <p>
          EDORA is more than just a case management system; it is a
          transformative tool that empowers DAABHS to fulfill its mission of
          providing essential services with efficiency and effectiveness.
        </p>
        <h3 className="dark">Here is why EDORA is crucial for our operations:</h3>
        <p>
          By implementing EDORA, we are not just improving operational
          efficiency; we are fundamentally enhancing the quality of life for
          those we serve. Together, we are building a brighter future for all
          Arkansans, where everyone has the opportunity to thrive, live
          independently, and age gracefully in their own homes and communities.
          Join us in our mission to support those who need it most!
        </p>
        <h3 className="dark">Streamlined Service Delivery</h3>
        <p>
          EDORA integrates all aspects of client management, allowing our staff
          to access vital information quickly. This streamlining means faster
          responses to client needs, ensuring that individuals receive timely
          assistance tailored to their specific situations.
        </p>
        <h3 className="dark">Enhanced Communication</h3>
        <p>
          With EDORA, communication between departments is seamless. This
          capability enables our teams to collaborate efficiently, sharing
          insights and updates that lead to comprehensive support for clients
          and their families.
        </p>
        <h3 className="dark">Data-Driven Decision Making</h3>
        <p>
          EDORA harnesses the power of analytics, providing actionable insights
          that help us monitor service outcomes and make informed adjustments.
          By utilizing real-time data, we can anticipate client needs, adapt our
          programs, and allocate resources effectively.
        </p>
        <h3 className="dark">Proactive Client Engagement</h3>
        <p>
          EDORA's event-driven architecture allows us to proactively identify
          and respond to client needs and regulatory changes. This proactive
          approach ensures we stay ahead of challenges, enhancing our ability to
          support Arkansans as their circumstances evolve.
        </p>
        <h3 className="dark">Accountability and Transparency</h3>
        <p>
          EDORA establishes clear protocols and responsibilities, fostering
          accountability within our teams. This transparency builds trust with
          clients, ensuring they feel supported and valued throughout their
          journey with us.
        </p>
      </div>
    </>
  );
};

export default Aging;
