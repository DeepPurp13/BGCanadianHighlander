import React from "react"; 
import "./LinkTree.css"; 
import LinkTreeLinks from "./components/LinkTreeLinks"; 
  const links = [ { title: "Discord", url: "https://discord.gg/NMy3SgPFMP" }, 
    { title: "What is Canadian Highlander?", url: "https://docs.google.com/document/d/1Q95RxteBrm68zukn0KpmSy4jWGlQlKjiEL38EZHXcX0/edit?tab=t.0" }, 
    { title: "Local Meta Decklist", url: "https://docs.google.com/spreadsheets/d/116EWKLkp7o4FYEnSebEKfg_hQ7m4SOzv8GsSQG0ZdfA/edit?gid=0#gid=0" }, 
    { title: "2025 New Player Primer", url: "https://canadianhighlander.ca/2025/01/06/2025-new-player-primer" }, 
    { title: "Points List", url: "https://canadianhighlander.ca/points-list"} 
  ];
  
  export default function LinkTree() 
  { 
    return (
     <div className="linktree-container"> 
       <LinkTreeLinks links={links} /> 
     </div> ); 
  }