import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

const FroalaEditor = dynamic(
  async () => {
    await import("froala-editor/js/plugins.pkgd.min.js");
    return await import("../../lib/FroalaEditor");
  },
  {
    ssr: false
  }
);

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.config = {
      placeholderText: "Add a Title",
      charCounterCount: false,
      toolbarInline: true,
      events: {
        initialized: function() {
          console.log("initialized");
        }
      }
    };

    this.state = {
      myTitle: "Click here to edit this text."
    };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleModelChange(model) {
    this.setState({
      myTitle: model
    });
  }

  handleInputChange(e) {
    this.setState({
      myTitle: e.target.value
    });
  }

  render() {
    return (
      <div className="sample">
        <h2>Inline Edit</h2>
        <FroalaEditor
          tag="textarea"
          config={this.config}
          model={this.state.myTitle}
          onModelChange={this.handleModelChange}
        />
        <textarea
          value={this.state.myTitle}
          onChange={this.handleInputChange}
        ></textarea>
      </div>
    );
  }
}

export default EditorComponent;
