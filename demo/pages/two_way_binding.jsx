import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

const FroalaEditor = dynamic(() => import("../../lib/FroalaEditor"), {
  ssr: false
});

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "Type here and the other input should update."
    };

    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleModelChange(model) {
    this.setState({
      content: model
    });
  }

  render() {
    return (
      <div className="sample">
        <h2>Two way binding</h2>
        <FroalaEditor
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />
        <br />
        <FroalaEditor
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />
      </div>
    );
  }
}

export default EditorComponent;
