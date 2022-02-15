import React, { Component } from "react";
import "./Awards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import SubSubTitle from "../../components/SubSubTitle/SubSubTitle";
import Space from "../../components/space/Space";

class Awards extends Component {
  render() {
    return (
      <div className="awards-container">
        <Title title="AWARDS & CERTIFICATIONS" />
        <Space />
        <div className="list-awards">
          <FontAwesomeIcon icon={faAward} className="awards-icon" />
          <ContentText contenttext="Hack 36 3rd prize winner" />
        </div>
        <div className="list-awards">
          <FontAwesomeIcon icon={faAward} className="awards-icon" />
          <ContentText contenttext="Mentor OpenCode/19" />
        </div>
        <div className="list-awards">
          <FontAwesomeIcon icon={faAward} className="awards-icon" />
          <ContentText contenttext="Started North Indonesia First Student Design and Developer Conference" />
        </div>
      </div>
    );
  }
}

export default Awards;
