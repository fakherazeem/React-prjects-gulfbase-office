import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="profiles">
      <Profile
        img="/2.png"
        name="Fakhar Azeem"
        para="Hello I'm Fakher and I'm a frontend web developer. I studied at University of Lahore and doing BSIET. I have recently completed my internship."
        skill1="HTML"
        skill2="CSS"
        skill3="GITHUB"
        skill4="JAVASCRIPT"
        skill5="REACT"
        skill6="BOOTSTRAP"
        skill7="TAILWIND"
      />
      <div className="profiles">
      <Profile
        img="/2.png"
        name="Fakhar Azeem"
        para="Hello I'm Fakher and I'm a frontend web developer. I studied at University of Lahore and doing BSIET. I have recently completed my internship."
        skill1="HTML"
        skill2="CSS"
        skill3="GITHUB"
        skill4="JAVASCRIPT"
        skill5="REACT"
        skill6="BOOTSTRAP"
        skill7="TAILWIND"
      />
    </div>
    <div className="profiles">
      <Profile
        img="/2.png"
        name="Fakhar Azeem"
        para="Hello I'm Fakher and I'm a frontend web developer. I studied at University of Lahore and doing BSIET. I have recently completed my internship."
        skill1="HTML"
        skill2="CSS"
        skill3="GITHUB"
        skill4="JAVASCRIPT"
        skill5="REACT"
        skill6="BOOTSTRAP"
        skill7="TAILWIND"
      />
    </div>
    </div>
    
  );
}

function Profile(props) {
  return (
    <div className="card">
      <img src={props.img} alt="profile" className="image" />
      <h1>{props.name}</h1>
      <p>{props.para}</p>

      <div className="list">
        <span>{props.skill1}</span>
        <span>{props.skill2}</span>
        <span>{props.skill3}</span>
       
      </div>
      <div className="list">
         <span>{props.skill4}</span>
        <span>{props.skill5}</span>
        <span>{props.skill6}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
