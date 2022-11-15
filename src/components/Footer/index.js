import React from "react";

function Footer({ viewing }) {
  const notAbsolute = ["Work", "About"];
  return (
    <footer
      className={`footer ${!notAbsolute.includes(viewing) && "absolute"} `}
    >
      <div className="footer-info">
        <a href="https://github.com/spyromancy"> Github </a>

        <a href="https://www.linkedin.com/in/joshua-haddix-1830a5239/">
          Linkedin
        </a>

        <a href="mailto:josh.haddix598@gmail.com">My Email</a>
      </div>
    </footer>
  );
}

export default Footer;
