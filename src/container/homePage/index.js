import React from "react";
import "./styles.css"

// COMPONENTS
import Controller from "../controller";
import Architecture from "../architecture";

function HomePage() {
  return (
    <div className="flexCol pdngXS fullHeight ">
        <div className="flexCol pdngXS pdngBMD">
          <h1>Home</h1>
        </div>
        <div className="flexRow fullHeight pdngBMD">
          <div className="flexCol pdngXS fullHeight width65"><Architecture/></div>
          <div className="flexCol pdngXS fullHeight width35"><Controller/></div>
        </div>
    </div>
  )
}

export default HomePage;