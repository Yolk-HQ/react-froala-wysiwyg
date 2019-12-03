import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

const FroalaEditorButton = dynamic(
  () => import("../../lib/FroalaEditorButton"),
  {
    ssr: false
  }
);

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      content: {
        innerHTML: "Click Me"
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
        <h2>Editor on 'button' tag</h2>
        <FroalaEditorButton
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />

        <h4>Model Obj:</h4>
        <div>{JSON.stringify(this.state.content)}</div>
      </div>
    );
  }
}

export default () => <EditorComponent />;
