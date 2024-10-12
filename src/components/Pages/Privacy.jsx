import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";

const Privacy = () => {
  return (
    <div className="pages-container">
      <ScrollToDiv targetDiv=".header-bar" />      
      <h1 className="dark">Privacy Statement for EDORA</h1>
      <div className="text-block">
        At EDORA, we value your privacy and are committed to protecting your
        personal information. This Privacy Statement explains how we collect,
        use, and share information about you when you use our services.
      </div>
      <h2 className="dark">1. Information We Collect</h2>
      <div className="text-block">
        We may collect various types of information in connection with our
        services, including:
      </div>
      <div className="text-block">
        <ul>
          <li>
            <strong>Personal Information</strong>: We may collect personal
            information that you provide directly to us, such as your name,
            email address, and contact details when you register for an account,
            subscribe to our newsletters, or contact us for support.
          </li>
          <li>
            <strong>Usage Data</strong>: We may collect information about your
            interactions with our services, such as your IP address, browser
            type, pages visited, and the time and date of your visits.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies</strong>: We may use
            cookies and similar technologies to enhance your experience on our
            website, analyze usage, and improve our services.
          </li>
        </ul>
      </div>
      <h2 className="dark">2. How We Use Your Information</h2>
      <div className="text-block">
        We may use the information we collect for various purposes, including

        <ul>
          <li>To provide, maintain, and improve our services.</li>
          <li>
            To communicate with you, including responding to your inquiries and
            sending you updates.
          </li>
          <li>
            To analyze usage trends and gather feedback to improve our services.
          </li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </div>
      <h2 className="dark">3. Information Sharing</h2>
      <div className="text-block">
        We do not sell or rent your personal information to third parties.
        However, we may share your information in the following circumstances:
      </div>

      <div className="text-block">
        <ul>
          <li>
            <strong>With Service Providers</strong>: We may share your
            information with third-party service providers who assist us in
            providing our services, such as hosting, data analysis, and customer
            support.
          </li>
          <li>
            <strong>For Legal Reasons</strong>: We may disclose your information
            if required to do so by law or in response to valid requests by
            public authorities.
          </li>
        </ul>
      </div>
      <h2 className="dark">4. Data Security</h2>
      <div className="text-block">
        We take the security of your information seriously and implement
        reasonable measures to protect it from unauthorized access, use, or
        disclosure. However, no method of transmission over the internet or
        method of electronic storage is 100% secure, and we cannot guarantee its
        absolute security.
      </div>

      <h2 className="dark">5. Your Rights</h2>
      <div className="text-block">
        Depending on your location and applicable laws, you may have the
        following rights regarding your personal information:
      </div>
      <div className="text-block">
        <ul>
          <li>The right to access your personal information.</li>
          <li>
            The right to request correction or deletion of your personal
            information.
          </li>
          <li>
            The right to object to or restrict the processing of your personal
            information.
          </li>
          <li>
            The right to withdraw consent at any time where we rely on your
            consent to process your personal information.
          </li>
        </ul>
      </div>
      <h2 className="dark">6. Changes to This Privacy Statement</h2>
      <div className="text-block">
        We may update this Privacy Statement from time to time. We will notify
        you of any changes by posting the new Privacy Statement on our website
        with a revised effective date. We encourage you to review this Privacy
        Statement periodically for any updates.
      </div>
      <h2 className="dark">7. Contact Us</h2>
      <div className="text-block">
        If you have any questions or concerns about this Privacy Statement or
        our privacy practices, please contact us at:
      </div>
    </div>
  );
};

export default Privacy;
