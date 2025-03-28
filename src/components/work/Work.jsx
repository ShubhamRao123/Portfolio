import React from "react";
import "./Work.css";
import Netflix from "../../assets/Netflix.png";
import Home from "../../assets/Home.png";
import Slack from "../../assets/slack.png";
import Crypto from "../../assets/Crypto.png";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="work__container container grid">
        <div className="work__card">
          <img src={Home} alt="" className="work__img" />

          <a
            href="https://url-shortener-ui-lilac.vercel.app/"
            className="work__button"
          >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
        <div className="work__card">
          <img src={Crypto} alt="" className="work__img" />

          <a href="https://cryyptooworld.netlify.app/" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
        <div className="work__card">
          <img src={Slack} alt="" className="work__img" />

          <a
            href="https://formbot-frontend-three.vercel.app/"
            className="work__button"
          >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
        <div className="work__card">
          <img src={Netflix} alt="" className="work__img" />

          <a
            href="https://github.com/ShubhamRao123/Netflix"
            className="work__button"
          >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
