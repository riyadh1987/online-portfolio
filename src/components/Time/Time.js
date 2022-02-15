import React, { Component } from "react";
import "./Time.css";

export class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <text className="time">{this.props.timetext}</text>
      </div>
    );
  }
}

export default Time;
