import React from "react";




export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={process.env.PUBLIC_URL + '/images/demo.png'} alt="I made this" />
    </div>
  );
}
