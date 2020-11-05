import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

const FroalaEditorInput = dynamic(() => import("../../lib/FroalaEditorInput"), {
  ssr: false
});

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      content: {
        placeholder: "I am an input!"
      }
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
        <h2>Sample 7: Editor on 'input' tag</h2>
        <FroalaEditorInput
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />
        <h4>Model Obj:</h4>
        <div>{JSON.stringify(this.state.content)}</div>
      </div>
    );
  }
}

export default EditorComponent;
