import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";

const Services = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".top" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">085D</h1>
          <h2 className="light">Our Service and Support</h2>
        </div>
      </div>
      <div className="pages-container">
        <section>
          <h2 className="dark">
            "Our" Services <span className="icon-size">🛠️</span>
          </h2>
          <div className="text-block">
            <span className="icon-size">🌍</span> You, alongside our growing
            community, offer a wide range of services to empower communities and
            improve lives, especially for Health and Human Organizations.
            Whether it's technical solutions, community outreach, or educational
            initiatives, your efforts help drive meaningful change in Health and
            Human Organizations. <span className="icon-size">💡</span>
            <p>
              <span className="icon-size">🌐</span>{" "}
              <strong>Tech Solutions:</strong> From custom software to
              open-source tools, you help create technology that empowers
              agencies to serve the public more effectively. Our solutions are
              user-friendly, efficient, and adaptable.{" "}
              <span className="icon-size">💻</span>
            </p>
            <p>
              <span className="icon-size">🤝</span>{" "}
              <strong>Community Outreach:</strong> You bring people together
              through outreach programs, fostering support for individuals in
              need. We believe in collaboration and connection.{" "}
              <span className="icon-size">🧩</span>
            </p>
            <p>
              <span className="icon-size">📚</span>{" "}
              <strong>Educational Initiatives:</strong> Knowledge is power. You
              provide resources and training that empower both individuals and
              organizations, building the skills needed to succeed.{" "}
              <span className="icon-size">🎓</span>
            </p>
          </div>

          <h2 className="dark">
            Why be a part of us{" "}<span className="icon-size">❓</span>
          </h2>
          <div className="text-block">
            You are part of a passionate community using skills for the greater
            good. These services are designed with empathy and innovation to
            make a real difference, thanks to your dedication.{" "}
            <span className="icon-size">❤️</span>
            <p>
              {" "}
              <span className="icon-size">🚀</span>{" "}
              <strong>Impact-Driven:</strong> Every service we offer is aimed at
              creating tangible positive change. We measure success by the
              impact we have on people's lives.{" "}
            </p>
            <p>
              {" "}
              <span className="icon-size">🔧</span>{" "}
              <strong>Customizable:</strong> We adapt our services to fit the
              unique needs of each community we serve. Flexibility is key to
              making sure our solutions truly work.{" "}
            </p>
            <p>
              {" "}
              <span className="icon-size">🤗</span>{" "}
              <strong>Human-Centered:</strong> People come first. Our services
              are designed to be inclusive, compassionate, and responsive to the
              needs of the community.{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
