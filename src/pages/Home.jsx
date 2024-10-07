// Home.jsx
import React from "react";
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";
const shuffledFeatures = shuffleArray(features); // Shuffle features

const Home = () => {
  return (
    <>
      <div className="pages-container">
        <section>

                <h1 className="dark">Human and Health Services</h1>
            <blockquote>
              <p>
                In every event lies the seed of opportunity; EDORA nurtures
                these seeds, transforming lives into brighter futures.{" "}
              </p>
              <footer>— EDORA</footer>
            </blockquote>

          <h2 className="dark">Client Case Management Solutions</h2>
          <h3 className="dark">Objective</h3>
          <div className="text-block">
            The overarching goal of Event Driven Operations in Human and Health
            Services is to ensure that clients receive timely and appropriate
            assistance while maximizing the agency's resources and operational
            capacity. By focusing on events that directly impact service
            delivery, agencies can create a more responsive and adaptive
            framework that enhances client outcomes and supports community
            health and well-being.
          </div>

          <h2 className="dark">Event Driven Operations</h2>
          <h3 className="dark">Definition</h3>
          <dl>
            <dt>Event Driven Operations</dt>
            <dd>
              A <span className="underline">methodology</span> employed by
              governmental agencies to streamline the delivery of Human and
              Health Services by responding proactively to identified events or
              triggers.
            </dd>

            <dt>Client Interactions</dt>
            <dd>
              Instances where clients seek assistance, such as applying for
              services, reporting changes in circumstances, or requesting
              support for specific health concerns.
            </dd>

            <dt>Regulatory Updates</dt>
            <dd>
              Changes in laws, regulations, or policies that necessitate
              immediate operational adjustments to remain compliant and
              effective in service delivery.
            </dd>

            <dt>Service Outcomes</dt>
            <dd>
              Monitoring and evaluation results that indicate a need for
              intervention, program modifications, or enhancements in service
              offerings.
            </dd>
          </dl>

          <h2 className="dark">Key Features</h2>
          <dl>
            <dt>Proactivity</dt>
            <dd>
              Anticipating client needs and regulatory requirements based on
              real-time data and event tracking to initiate timely responses and
              support.
            </dd>

            <dt>Data-Driven Decision Making</dt>
            <dd>
              Utilizing data analytics and event monitoring systems to gather
              insights that inform operational strategies and service
              improvements.
            </dd>

            <dt>Collaboration</dt>
            <dd>
              Facilitating partnerships between various departments and agencies
              to ensure a comprehensive response to events that affect client
              well-being.
            </dd>

            <dt>Accountability</dt>
            <dd>
              Establishing clear protocols and responsibilities for responding
              to events, enhancing transparency and trust in government
              services.
            </dd>
          </dl>
        </section>
      </div>
    </>
  );
};

export default Home; // Make sure this line is present
