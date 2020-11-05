import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";

const FroalaEditor = dynamic(
  async () => {
    const FroalaEditorCore = (await import("froala-editor")).default;
    FroalaEditorCore.DefineIcon("alert", { NAME: "info", SVG_KEY: "help" });
    FroalaEditorCore.RegisterCommand("alert", {
      title: "Hello",
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function() {
        alert("Hello!");
      }
    });

    FroalaEditorCore.DefineIcon("clear", { NAME: "remove", SVG_KEY: "remove" });
    FroalaEditorCore.RegisterCommand("clear", {
      title: "Clear HTML",
      focus: false,
      undo: true,
      refreshAfterCallback: true,
      callback: function() {
        this.html.set("");
        this.events.focus();
      }
    });

    FroalaEditorCore.DefineIcon("insert", { NAME: "plus", SVG_KEY: "add" });
    FroalaEditorCore.RegisterCommand("insert", {
      title: "Insert HTML",
      focus: true,
      undo: true,
      refreshAfterCallback: true,
      callback: function() {
        this.html.insert("My New HTML");
      }
    });
    return await import("../components/CustomButtonFroalaEditor");
  },
  {
    ssr: false
  }
);

const CustomButton = () => {
  return (
    <FroalaEditor
      tag="textarea"
      config={{
        pluginsEnabled: ["align", "link"],
        language: "ro",
        toolbarButtons: [
          ["undo", "redo", "bold"],
          ["alert", "clear", "insert"]
        ]
      }}
    />
  );
};

export default CustomButton;
