import React, { Component } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import SubSubTitle from "../../components/SubSubTitle/SubSubTitle";
import Space from "../../components/space/Space";

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <Title title="SKILLS" />
        <Space />
        <SubSubTitle subsubtitle="PROGRAMMING LANGUAGES & TOOLS" />
        <div className="two-column-skills">
          <div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="HTML 5" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Javascript" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Node js" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Django" />
            </div>
          </div>
          <div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="HTML 5" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Javascript" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Node js" />
            </div>
            <div className="list-skills">
              <FontAwesomeIcon icon={faCheck} className="skills-icon" />
              <ContentText contenttext="Django" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
