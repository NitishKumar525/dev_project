import React from "react";
import "./App.css"; // Assuming you will create a separate CSS file for styles

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            alt="Logo"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/4fdyJhA1EZQ4C6MTFFkcewSg9VMm1lRz5eC3pgIfOiPV2JaPB.jpg"
            width="40"
          />
        </div>
        <div className="links">
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <a href="#">Reviews</a>
          <a href="#">Insights</a>
        </div>
        <a className="cta" href="#">
          See pricing
        </a>
      </div>
      <div className="content">
        <div className="beta">
          <p>BETA 2.0 AVAILABLE NOW</p>
        </div>
        <h1>
          Build websites <span className="highlight">effortlessly</span> now or
          never!
        </h1>
        <p>
          Easy-to-use and powerful page builder, your gateway to intuitive tools
          and expansive customization options that transform how you build
          websites.
        </p>
        <a className="cta" href="#">
          Get started <i className="fas fa-arrow-right"></i>
        </a>
        <p>No credit cards required - 14 days free trial.</p>
        <div className="avatars">
          <img
            alt="Avatar 1"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/Umk6a9tp1LKQFNsRUWBPZWc2fbLBJGcM1wJkW2Q2O7MzOR7JA.jpg"
            width="50"
          />
          <img
            alt="Avatar 2"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/U5QZy2030a5KHBhmwpfA6XqJj8ErGfLXBsLRsiVvUN5odi2TA.jpg"
            width="50"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
