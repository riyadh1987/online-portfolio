import React, { Component } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import SubSubTitle from "../../components/SubSubTitle/SubSubTitle";
import Space from "../../components/space/Space";
import Time from "../../components/Time/Time";

class Experience extends Component {
  render() {
    return (
      <div className="experience-container">
        <Title title="EXPERIENCE" />
        <Space />
        <div>
          <div className="with-time">
            <SubTitle subtitle="GITHUB CAMPUS EXPERT" />
            <Time timetext="August 2018 - Present" />
          </div>
          <SubSubTitle subsubtitle="GITHUB" />
          <ContentText
            contenttext="Responsible for building the on campus community with the support
          of GitHub"
          />
        </div>
        <Space />
        <div>
          <div className="with-time">
            <SubTitle subtitle="OPENSOURCE DEVELOPER INTERN" />
            <Time timetext="June 2019 - Present" />
          </div>
          <SubSubTitle subsubtitle="FOSSASIA" />
          <ContentText
            contenttext="Contributing to Fossasia's open server and frontend as an intern. 
            Resolved numerous bugs and added new features to the platform"
          />
        </div>
        <Space />
        <div>
          <div className="with-time">
            <SubTitle subtitle="SOFTWARE DEVELOPER INTERN" />
            <Time timetext="December 2018 - January 2019" />
          </div>
          <SubSubTitle subsubtitle="HASURA" />
          <ContentText contenttext="Worked on Hasura's GraphQL engine and added new features in it." />
        </div>
      </div>
    );
  }
}

export default Experience;
