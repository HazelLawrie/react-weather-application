import React from "react";

import Instagram from "./PngItem_20020.png";
import Github from "./PngItem_1280311.png";
import Linkedin from "./linkedinlogo.png";
import Behance from "./behancelogo.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        <a
          href="https://github.com/HazelLawrie/react-weather-application"
          target="_blank"
          rel="noreferrer"
        >
          Open source-code
        </a>
        &#160;by&#160;
        <a
          href="https://www.linkedin.com/in/hazel-lawrie/"
          target="_blank"
          rel="noreferrer"
        >
           Hazel Lawrie 
        </a>
        &#160;and&#160;
        <a
          href="https://confident-stonebraker-371fb5.netlify.app/"
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
