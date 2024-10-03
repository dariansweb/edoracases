import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import "./styles/Pages.css"; // Link to the specific CSS for this component

const JuvenileJustice = () => {
  return (
    <>
      <ScrollToTop />
      <div className="pages-container">
        <h1>The Division of Youth Services</h1>
        <p>
          The Division of Youth Services (DYS) provides effective prevention,
          intervention, and treatment programs for youth involved in the
          Arkansas juvenile justice system. Our goals are simple: give youth and
          families the opportunities and services they need to be successful in
          a way that ensures public safety.
        </p>
        <p>
          The purpose of the juvenile justice system is getting youth treatment
          – not punishment – so that they can flourish when they return to their
          homes and communities. We use different strategies to help youth
          become productive and responsible members of society:
        </p>
        <ul>
          <li>
            <strong>Prevention and diversion programs</strong> based in
            communities across Arkansas, including the Civilian Student Training
            Program.
          </li>
          <li>
            <strong>Residential treatment and correctional programs</strong>,
            including education, for youth placed in State custody by a judge.
            There are four state residential facilities in Arkansas.
          </li>
          <li>
            <strong>Re-entry programs</strong> for youth leaving other programs.
          </li>
        </ul>
        <p>
          DYS also works to lead reform efforts and collaborate with juvenile
          judges, schools, and others working to prevent most youth from ever
          needing legal intervention and our services. When youth are placed in
          our care for treatment, we believe it is important that their families
          have a voice in their treatment and are active in treatment as they
          are critical to youth success.
        </p>
        <h2>Division Structure</h2>
        <p>Our division is divided into several sections:</p>
        <ul>
          <li>
            <strong>Service Delivery, Compliance, and Quality Assurance</strong>{" "}
            – monitors contracts and ensures vendors, including the private
            company that handles the day-to-day management of our residential
            treatment centers.
          </li>
          <li>
            <strong>Treatment</strong> – assesses every youth committed to DYS
            to determine their treatment needs, including medical, mental
            health, and substance abuse issues. The same unit monitors the
            youth’s progress and adjusts the plans as necessary to allow the
            youth to successfully return to the community.
          </li>
          <li>
            <strong>Education</strong> – works with youth and guardians to
            determine the most appropriate educational programming for youth in
            DYS care, such as earning a high school diploma, a GED, or
            post-graduate educational services that will help students meet
            their academic, college, career, and vocational goals.
          </li>
        </ul>
      </div>
    </>
  );
};

export default JuvenileJustice;
