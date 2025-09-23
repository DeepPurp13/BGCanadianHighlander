import React from "react";
import "./LinkTreeLinks.css";

const LinkTreeLinks = ({ links }) => {
  return (
    <div className="linktree-links">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default LinkTreeLinks;