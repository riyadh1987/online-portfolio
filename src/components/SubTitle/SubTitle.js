import React, { Component } from "react";
import "./Subtitle.css";

export class SubTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <text className="subtitle">{this.props.subtitle}</text>
      </div>
    );
  }
}

export default SubTitle;
