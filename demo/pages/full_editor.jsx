import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

import FroalaEditorView from "../../lib/FroalaEditorView";

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

    this.state = {
      content: "<span>My Document's Title</span>"
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
        <h2>Full Featured</h2>
        <FroalaEditor
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />
        <h4>Rendered Content:</h4>
        <FroalaEditorView model={this.state.content} />
      </div>
    );
  }
}

export default EditorComponent;
