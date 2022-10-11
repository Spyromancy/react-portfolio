import React from "react";

function Footer({ viewing }) {
  return (
    <footer className={`footer ${viewing !== "Work" && "absolute"}`}>
      <div className="footer-info">
        <a href="https://github.com/spyromancy"> Github </a>

        <a href="https://www.linkedin.com/in/joshua-haddix-1830a5239/">
          Linkedin
        </a>

        <a href="https://stackoverflow.com/users/18982022/josh-h">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
}

export default Footer;
