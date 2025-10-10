import React from "react"; 
import "./LinkTree.css"; 
import LinkTreeLinks from "./components/LinkTreeLinks"; 
  const links = [ 
    { title: "Decklists", url: "https://moxfield.com/users/CanlanderDatabase" }, 
    { title: "Points List", url: "https://canadianhighlander.ca/points-list/" }, 
    { title: "New Player Primer", url: "https://canadianhighlander.ca/2025/01/06/2025-new-player-primer/" }, 
    { title: "Proxies", url: "https://mtgprint.net/" }, 
    { title: "Content", url: "https://www.youtube.com/playlist?list=PLzRiDUMuwrleJLb_yZbFk0XxDJZLcyOQ3"},
    { title: "Our Discord", url:"https://discord.gg/ejgKwxha"}
  ];
  
  export default function LinkTree() 
  { 
    return (
     <div className="linktree-container"> 
       <LinkTreeLinks links={links} /> 
     </div> ); 
  }

    
