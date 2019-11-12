import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React from "react";

const FroalaEditorA = dynamic(() => import("../../lib/FroalaEditorA"), {
  ssr: false
});

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      content: {
        href: "https://www.froala.com/wysiwyg-editor"
      },
      initControls: null
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
        <h2>Editor on 'a' tag.</h2>
        <div>
          <FroalaEditorA
            model={this.state.content}
            onModelChange={this.handleModelChange}
          >
            Froala
          </FroalaEditorA>
        </div>
      </div>
    );
  }
}

export default () => <EditorComponent />;
