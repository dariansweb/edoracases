import React from "react";
import "./styles/Pages.css"; // Link to the specific CSS for this component

const ProviderServices = () => {
  return (
    <div className="pages-container">
      <h1>Division of Provider Services and Quality Assurance</h1>
      <p>
        The Division of Provider Services and Quality Assurance improves the
        quality of life for Arkansans through provider engagement and oversight.
        It is responsible for the certification, licensing, and surveying of
        long-term care and Medicaid providers. DPSQA also conducts quality
        assurance activities to review outcomes, determine compliance, and
        promote workforce development.
      </p>
      <h2>DPSQA Structure</h2>
      <p>DPSQA is divided into three units:</p>
      <ul>
        <li>
          <strong>Office of Long-term Care</strong> licenses, surveys, and
          regulates long-term care facilities, such as skilled nursing
          facilities. This unit also investigates all nursing home complaints.
        </li>
        <li>
          <strong>Community Services</strong> licenses, certifies, and regulates
          assisted living facilities, home and community-based programs, day
          treatment programs, and alcohol and drug abuse treatment providers.
          This unit also reviews concerns, complaints, and allegations of
          substandard care as it relates to facility practices.
        </li>
        <li>
          <strong>Performance & Engagement</strong> is the hub of the division.
          It is the first point of contact for allegations of abuse, neglect,
          and exploitation in long-term care facilities and other types of
          facilities. This unit also determines eligibility of applicants to
          work in long-term care facilities or to provide waiver services.
          Additionally, it oversees the following programs and services:
          <ul>
            <li>
              <strong>Options Counseling</strong> – This service provides
              nursing facility clients with information and options about
              transitioning to a least restrictive setting.
            </li>
            <li>
              <strong>Lifespan Respite</strong> – This program offers Arkansans
              education about respite services and provides respite vouchers to
              those that may need assistance.
            </li>
            <li>
              <strong>Occupational Licensing</strong> – The division oversees
              the Certified Nurse Aid Training Program and the Certified Nursing
              Home Administrator program.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ProviderServices;
