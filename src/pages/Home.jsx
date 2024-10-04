// Home.jsx
import React from "react";
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";
import "./styles/Home.css";

const shuffledFeatures = shuffleArray(features); // Shuffle features

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="dark">Human and Health Services</h1>
        <h2 className="dark">Client Management</h2>
        {/* <p>
        <ul className="rotating-features">
          {shuffledFeatures.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
        </p> */}

        <h2 className="dark">Objective:</h2>
        <p>
          The overarching goal of Event Driven Operations in Human and Health
          Services is to ensure that clients receive timely and appropriate
          assistance while maximizing the agency's resources and operational
          capacity. By focusing on events that directly impact service delivery,
          agencies can create a more responsive and adaptive framework that
          enhances client outcomes and supports community health and well-being.
        </p>
        <h1 className="dark">Event Driven Operations</h1>
        <h2 className="dark">Definition:</h2>
        <p>
          Event Driven Operations is a methodology employed by governmental
          agencies to streamline the delivery of Human and Health Services by
          responding proactively to identified events or triggers. These events
          may include:
        </p>
        <p>
          <h2 className="dark">Client Interactions:</h2>
          <p>
            Instances where clients seek assistance, such as applying for
            services, reporting changes in circumstances, or requesting support
            for specific health concerns.
          </p>

          <h2 className="dark">Regulatory Updates:</h2>
          <p>
            Changes in laws, regulations, or policies that necessitate immediate
            operational adjustments to remain compliant and effective in service
            delivery.
          </p>

          <h2 className="dark">Service Outcomes:</h2>
          <p>
            Monitoring and evaluation results that indicate a need for
            intervention, program modifications, or enhancements in service
            offerings.
          </p>

          <h2 className="dark">Key Features:</h2>

          <h3 className="dark">Proactivity:</h3>
          <p>
            Anticipating client needs and regulatory requirements based on
            real-time data and event tracking to initiate timely responses and
            support.
          </p>

          <h3 className="dark">Data-Driven Decision Making:</h3>
          <p>
            Utilizing data analytics and event monitoring systems to gather
            insights that inform operational strategies and service
            improvements.
          </p>

          <h3 className="dark">Collaboration:</h3>
          <p>
            Facilitating partnerships between various departments and agencies
            to ensure a comprehensive response to events that affect client
            well-being.
          </p>

          <h3 className="dark">Accountability:</h3>
          <p>
            Establishing clear protocols and responsibilities for responding to
            events, enhancing transparency and trust in government services.
          </p>
        </p>
      </div>
    </>
  );
};

export default Home; // Make sure this line is present
