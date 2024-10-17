import React, { useState } from "react";
import "./styles/helpDescription.css";

const HelpDescription = () => {
  const [isVisible, setIsVisible] = useState(false); // Track the visibility of the description

  // Toggle description visibility
  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="help-description-container">
      <button className="toggle-btn" onClick={toggleDescription}>
        {isVisible ? "Hide Help" : "Show Help"}
      </button>

      {isVisible && (
        <div className="description-content text-block">
          <h2>Case Story Page Overview</h2>
          <p>
            Welcome to the Case Story Page, a tool crafted to help you bring
            transformative change to your clients' lives. This isn’t just about
            selecting services—it's about capturing the essence of their story
            and connecting them to the right pathways for a brighter future.
          </p>
          <p>
            As you navigate through selecting divisions, titles, and additional
            service options, you’re not just filling out fields; you’re laying
            the foundation for hope and resilience. Every click represents a new
            opportunity—every option you choose has the potential to change a
            life.
          </p>
          <p>
            The Case Story Page is designed with you, the case worker, in mind. We
            know how challenging yet rewarding your job can be. With this tool,
            we aim to simplify the complexities of case management so you can
            focus on what really matters: uplifting and empowering your clients.
            We want you to feel confident knowing that every division selected,
            every service added, and every journey documented is a crucial step
            in creating an impactful story for those who need it most.
          </p>
          <p>
            The journey you’re building here will enable your clients to receive
            the support they deserve, where they need it, when they need it.
            Your dedication to their journey can help them grow, overcome
            barriers, and ultimately succeed. Let this tool be your partner in
            delivering real, meaningful outcomes—because when clients thrive,
            entire communities thrive.
          </p>
          <p>
            Thank you for being the guiding force in your clients’ lives.
            Together, let’s make each story not just a journey but a success
            story.
          </p>
        </div>
      )}
    </div>
  );
};

export default HelpDescription;
