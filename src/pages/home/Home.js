import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import ContentText from "../../components/Text/Text";
import Space from "../../components/space/Space";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <Title title="LOREMIPSUM" type="name" />
          <SubTitle subtitle="+62-0123456789 - LOREMIPSUM@GMAIL.COM" />
        </div>
        <Space />
        <ContentText
          contenttext="I am an opensource contributor and have contributed to Zulip, Hasura,
          Fossasia, Publiclab and many other projects. My tech stack includes
          Pyhton and Javascript. Python for server side and scripting and
          Javascript for frontend. I use Django framework for the server side
          development and React for the frontend development. I have also worked
          with GraphQL. I am a GitHub Campus Expert at my institute where I am
          responsible for building on campus community. I am the lead organiser
          of Hack in The North Hackathon and the cofounder of Pragma Conference
          held at IIIT Allahabad."
        />
        <Space />
        <div className="socialMedia-icon">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </div>
      </div>
    );
  }
}

export default Home;
