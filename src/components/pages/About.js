import React from "react";
import profilePic from "../../assets/images/IMG_0216.jpg"

const About = () => (
  <div className="about-me">
    <img src={profilePic} alt="profile"/>
    <div>
      <h1>About Me</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
        ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
        quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
        diam, sit amet facilisis lectus blandit at.
      </p>
    </div> 
  </div>
);

export default About;
