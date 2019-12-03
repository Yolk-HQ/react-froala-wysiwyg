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
      initControls: null
    };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleController = this.handleController.bind(this);
    this.initializeEditor = this.initializeEditor.bind(this);
    this.destroyEditor = this.destroyEditor.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  handleModelChange(model) {
    this.setState({ content: model });
  }

  deleteAll() {
    if (!this.state.initControls) {
      return;
    }
    this.state.initControls.getEditor().html.set();
    this.state.initControls.getEditor().undo.reset();
    this.state.initControls.getEditor().undo.saveStep();
  }

  handleController(initControls) {
    this.setState({ initControls: initControls });
  }

  initializeEditor() {
    this.state.initControls.initialize();
    this.setState({ initControls: this.state.initControls });
  }

  destroyEditor() {
    this.state.initControls.destroy();
    this.setState({ initControls: this.state.initControls });
  }

  render() {
    return (
      <div className="sample">
        <h2>Manual Initialization</h2>
        {this.state.initControls ? (
          <button className="manual" onClick={this.initializeEditor}>
            Initialize Editor
          </button>
        ) : null}
        {this.state.initControls && this.state.initControls.getEditor() ? (
          <span>
            <button className="button" onClick={this.destroyEditor}>
              Close Editor
            </button>
            <button className="button" onClick={this.deleteAll}>
              Delete All
            </button>
          </span>
        ) : null}
        <FroalaEditor
          model={this.state.content}
          onModelChange={this.handleModelChange}
          onManualControllerReady={this.handleController}
        >
          Check out the{" "}
          <a href="https://www.froala.com/wysiwyg-editor">Froala Editor</a>
        </FroalaEditor>
      </div>
    );
  }
}

export default () => <EditorComponent />;
