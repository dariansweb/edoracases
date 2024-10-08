import React from "react";
import ScrollToDiv from "../utils/ScrollToDiv";


const Services = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".hero-container" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">085D</h1>
          <h2 className="light">Our Service and Support</h2>
        </div>
      </div>
      <div className="pages-container">
        <h2 className="dark">Tailored for Your Agency</h2>
        <div className="text-block">
          The EDORA team is committed to analyzing your agency's current
          technologies and workflows to create a system that seamlessly
          integrates with your existing infrastructure. Whether you're starting
          from scratch or need to optimize and upgrade your current systems, our
          engineers will work alongside you to ensure the solution is built
          specifically for your unique needs.
          <p>
            At EDORA, we believe in empowering agencies with a robust,
            customizable, and open-source solution to their client case
            management needs. Our team is dedicated to providing the expertise
            and support you need to build a powerful system that aligns
            perfectly with your operational goals.
          </p>
        </div>
        <h2 className="dark">Open Source, Endless Possibilities</h2>
        <div className="text-block">
          EDORA is an open-source platform, which means you have the freedom to
          customize every aspect of your case management system. You're not tied
          to any single vendor or proprietary software. With EDORA, you get the
          best of both worlds: a feature-rich platform that is fully adaptable
          and a skilled team of developers ready to assist in taking your system
          to the next level.
        </div>
        <h2 className="dark">Dedicated Engineering Support</h2>
        <div className="text-block">
          Our dedicated engineers are here to provide guidance, troubleshoot
          issues, and help you fully implement your vision. We bring years of
          technical experience and industry knowledge to the table, making sure
          your agency’s client management system is not only efficient and
          reliable but also scalable for future growth.
        </div>
        <h2 className="dark">Let’s Build Something Awesome</h2>
        <div className="text-block">
          Whether you need consultation, customization, or full-scale
          development, the EDORA team is here to support you every step of the
          way. Let us help you build an awesome client case management system
          that’s as unique as your agency. Get in touch with us today and take
          the first step towards a more streamlined, efficient, and innovative
          case management solution.
        </div>
      </div>
    </>
  );
};

export default Services;
