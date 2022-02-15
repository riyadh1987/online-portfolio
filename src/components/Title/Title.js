import React, { Component } from "react";
import "./Title.css";

export class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.type === "name") {
      return (
        <div>
          <text className="name">{this.props.title}</text>
        </div>
      );
    } else {
      return (
        <div>
          <text className="title">{this.props.title}</text>
        </div>
      );
    }
  }
}

export default Title;
