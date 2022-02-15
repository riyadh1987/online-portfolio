import React, { Component } from "react";
import "./Interest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import Space from "../../components/space/Space";

class Interest extends Component {
  render() {
    return (
      <div className="interest-container">
        <Title title="INTERESTS" />
        <Space />
        <ContentText
          contenttext="Apart from being a web develper, I enjoy most of my time being outdoors. 
          In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado,
          I enjoy mountain biking, free climbing, and kayaking."
        />
        <ContentText
          contenttext="When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows,
          I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology
          advancements in the front-end web development world."
        />
      </div>
    );
  }
}

export default Interest;
