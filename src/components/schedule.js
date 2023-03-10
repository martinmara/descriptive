import React from "react";
import "./schedule.css";
import { StaticImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal";

export default function Schedule() {
  return (
    <Animation type="fadeUp">
      <div className="main">
        <h1 className="heading">
          Find the perfect time for your busy schedule
        </h1>
        <p className="paragraph">
          Take lessons anytime. Book lessons in seconds via desktop or mobile.
        </p>
        <div className="image">
          <StaticImage src="../images/best-apps-screenshot.jpg" alt="hello" />
        </div>
      </div>
    </Animation>
  );
}
