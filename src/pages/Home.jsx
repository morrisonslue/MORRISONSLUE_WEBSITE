import React from "react";
import "../styles/layout/NavMenu.css"; 
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="body-container">
      <div className="content-container"> 
        <div className="left-flexbox">
          <div className="left-top empty"></div>
          <div className="left-second">
            <h6 className="h6">Chris Morrison</h6>
          </div>
          <div className="left-third">
            <p className="big-text">I Work Right<br /> Here</p>
          </div>
          <div className="left-fourth">
            <h6 className="h6">Fusing Expertise, Fixing Challenges for Industry</h6>
          </div>
          <div className="left-bottom empty"></div>
        </div>
        <div className="right-flexbox"></div>
      </div>
    </div>
  );
};

export default Home;

