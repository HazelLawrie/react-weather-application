import React from "react";

import Instagram from "/images/PngItem_20020.png";
import Github from "/images/PngItem_1280311.png";
import Linkedin from "/images/linkedinlogo.png";
import Behance from "/images/behancelogo.png";

export default function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/HazelLawrie/weather-application"
          target="_blank"
          rel="noreferrer"
        >
          Open source-code
        </a>
        by
        <a
          href="https://www.linkedin.com/in/hazel-lawrie/"
          target="_blank"
          rel="noreferrer"
        >
          Hazel Lawrie
        </a>
        and
        <a
          href="https://boring-ardinghelli-f09f8b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
      <a
        href="https://github.com/HazelLawrie/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="github-logo" src={Github} alt="Github Logo" />
      </a>
      <a
        href="https://www.instagram.com/hazel.codes/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="instagram-logo" src={Instagram} alt="Instagram Logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/hazel-lawrie/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="linkedin-logo" src={Linkedin} alt="Linkedin Logo" />
      </a>
      <a
        href="https://www.behance.net/hazel-lawrie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="behance-logo" src={Behance} alt="Behance Logo" />
      </a>
    </footer>
  );
}
