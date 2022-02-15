import React, { Component } from "react";
import "./Text.css";

export class ContentText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className="text">{this.props.contenttext}</p>
      </div>
    );
  }
}

export default ContentText;
