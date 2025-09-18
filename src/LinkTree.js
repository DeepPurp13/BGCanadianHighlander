import React from "react";
import "./LinkTree.css";

const links = [
  { title: "Discord", url: "discord.gg/DUMVtqa8" },
  { title: "What is Canadian Highlander?", url: "https://docs.google.com/document/d/1Q95RxteBrm68zukn0KpmSy4jWGlQlKjiEL38EZHXcX0/edit?tab=t.0" },
  { title: "Local Meta Decklist", url: "https://docs.google.com/spreadsheets/d/116EWKLkp7o4FYEnSebEKfg_hQ7m4SOzv8GsSQG0ZdfA/edit?gid=0#gid=0" },
  { title: "2025 New player Primer", url: "https://canadianhighlander.ca/2025/01/06/2025-new-player-primer" },
  { title: "Points List", url: "https://canadianhighlander.ca/points-list"}
];

export default function LinkTree() {
  return (
    <div className="linktree-container">

      <div className="linktree-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}