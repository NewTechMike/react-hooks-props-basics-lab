import React from "react";
import user from "../data/user";
import Links from "./Links"

function About(props) {
  console.log("About Props: ", props)
  console.log("About props bio: ", props.bio)
  console.log("About props links: ", props.links)
  if(!props.bio){
    return null
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>     
      <p id="bio">{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
    </div>
  );
  }
}

export default About;
