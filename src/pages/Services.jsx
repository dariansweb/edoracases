import React from "react";
import ScrollToDiv from "../utils/ScrollToDiv";

const Services = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".hero-container" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">Solutions</h1>
          <h2 className="light">Our Service and Support</h2>
          <h3 className="light">Client Management Solutions</h3>
        </div>
      </div>
      <div className="pages-container">
        <p>
          At EDORA, we believe in empowering agencies with a robust,
          customizable, and open-source solution to their client case management
          needs. Our team is dedicated to providing the expertise and support
          you need to build a powerful system that aligns perfectly with your
          operational goals.
        </p>
        <h2 className="dark">Tailored for Your Agency</h2>
        <p>
          The EDORA team is committed to analyzing your agency's current
          technologies and workflows to create a system that seamlessly
          integrates with your existing infrastructure. Whether you're starting
          from scratch or need to optimize and upgrade your current systems, our
          engineers will work alongside you to ensure the solution is built
          specifically for your unique needs.
        </p>
        <h2 className="dark">Open Source, Endless Possibilities</h2>
        <p>
          EDORA is an open-source platform, which means you have the freedom to
          customize every aspect of your case management system. You're not tied
          to any single vendor or proprietary software. With EDORA, you get the
          best of both worlds: a feature-rich platform that is fully adaptable
          and a skilled team of developers ready to assist in taking your system
          to the next level.
        </p>
        <h2 className="dark">Dedicated Engineering Support</h2>
        <p>
          Our dedicated engineers are here to provide guidance, troubleshoot
          issues, and help you fully implement your vision. We bring years of
          technical experience and industry knowledge to the table, making sure
          your agency’s client management system is not only efficient and
          reliable but also scalable for future growth.
        </p>
        <h2 className="dark">Let’s Build Something Awesome</h2>
        <p>
          Whether you need consultation, customization, or full-scale
          development, the EDORA team is here to support you every step of the
          way. Let us help you build an awesome client case management system
          that’s as unique as your agency. Get in touch with us today and take
          the first step towards a more streamlined, efficient, and innovative
          case management solution.
        </p>
        <p>
          <strong>Contact Us:</strong> Reach out to our team at{" "}
          <a href="mailto:support@edoracases.com">support@edoraapp.com</a> to
          discuss your project needs and how we can help.
        </p>
      </div>{" "}
    </>
  );
};

export default Services;
