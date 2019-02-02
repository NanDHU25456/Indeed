import React from "react";
import ReactDom from "react-dom";

class MainComponent extends React {
  render() {
    return <p> This is Main Component </p>;
  }
}

ReactDom.render(<MainComponent />, Document.getElementByID("app"));
