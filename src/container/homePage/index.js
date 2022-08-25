import React from "react";
import "./styles.css"

// COMPONENTS
import Controller from "../controller";

function HomePage() {
  return (
    <div className="flexCol pdngXS fullHeight">
        <div className="flexCol pdngXS">
          <h1>Home</h1>
        </div>
        <div className="flexRow fullHeight">
          <div className="flexCol pdngXS fullHeight width25"><Controller/></div>
          <div className="flexCol pdngXS fullHeight width50"><Controller/></div>
          <div className="flexCol pdngXS fullHeight width25"><Controller/></div>
          
        </div>
    </div>
  )
}

export default HomePage;