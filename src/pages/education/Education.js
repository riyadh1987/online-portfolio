import React, { Component } from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import SubSubTitle from "../../components/SubSubTitle/SubSubTitle";
import Space from "../../components/space/Space";
import Time from "../../components/Time/Time";

class Education extends Component {
  render() {
    return (
      <div className="education-container">
        <Title title="EDUCATION" />
        <Space />
        <div>
          <div className="with-time">
            <SubTitle subtitle="LOREMIPSUM INSTITUTE OF INFORMATION TECHNOLOGY" />
            <Time timetext="August 2016 - Present" />
          </div>
          <SubSubTitle subsubtitle="BACHELOR OF TECHNOLOGY" />
        </div>
        <ContentText contenttext="12.34" />
      </div>
    );
  }
}

export default Education;
