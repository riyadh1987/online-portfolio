import React, { Component } from "react";
import "./SubSubTitle.css";

export class SubSubTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <text className="subsubtitle">{this.props.subsubtitle}</text>
      </div>
    );
  }
}

export default SubSubTitle;
