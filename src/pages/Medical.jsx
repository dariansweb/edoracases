import React from "react";
import "./styles//Pages.css"; // Link to the specific CSS for this component

const Medical = () => {
  return (
    <div className="pages-container">
      <h1>Division of Medical Services</h1>
      <p>
        The Division of Medical Services is the administrative arm of Arkansas
        Medicaid, overseeing provider enrollment, billing, pharmacy, beneficiary
        support, and fee-for-service and managed care programs funded by
        Medicaid. Arkansas Medicaid, which is jointly funded and operated by DHS
        and the Centers for Medicare and Medicaid Services (CMS), provides
        medically necessary health care services for eligible Arkansans from
        birth through end-of-life. Beneficiaries with questions about
        eligibility should contact the Division of County Operations.
      </p>
      <h2>Division Structure</h2>
      <p>The Division is divided into four units:</p>
      <ul>
        <li>
          <strong>Plan Partnerships</strong> oversees contract and managed care
          programs, including the Provider-Led Arkansas Shared Savings Entity
          (PASSE) for Medicaid clients with complex behavioral health,
          developmental, or intellectual disabilities, Non-Emergency
          Transportation services, the dental managed care program called Health
          Smiles, and the Arkansas Independent Assessment system that is used to
          perform a functional-needs assessment to assist in the development of
          an individual’s Person-Centered Service Plan (PCSP) and personal care
          services plan.
        </li>
        <li>
          <strong>Fee for Service</strong> oversees provider enrollment, prior
          authorizations and utilization review, the Electronic Visit
          Verification system, rate reviews, the voluntary performance-based
          incentive program known as Patient-Centered Medical Home (PCMH),
          Primary Care Case Management (PCCM) program in which physicians agree
          to monitor the care of their Medicaid clients, and the policy analysis
          unit, which plans, develops, and implements policy changes within
          Medicaid.
        </li>
        <li>
          <strong>Administration & Operations</strong> oversees contracts,
          reporting, and technology systems and works with the DHS shared
          services offices, including Human resources and Finance. The goal of
          Administration & Operations is to facilitate the smooth and efficient
          operation of those other areas and the programs they administer.
        </li>
        <li>
          <strong>Pharmacy</strong> serves Arkansas Medicaid clients needing
          prescription services from Medicaid-enrolled providers, both enrolled
          prescribers and enrolled pharmacies. Pharmacy develops clinical drug
          criteria, and is staffed by clinical pharmacists who review cases
          needing prior authorization. The Pharmacy Vendor for the Arkansas
          Medicaid Pharmacy Department helps develop clinical criteria, rebate
          invoicing and collection, and has clinical pharmacy staff to review
          cases needing prior authorization.
        </li>
      </ul>
    </div>
  );
};

export default Medical;
