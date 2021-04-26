import "./App.css";
import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import RichTextEditor from "react-rte";
import PropTypes from "prop-types";
import MyStatefulEditor from "./MyState";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillEditor from "./QuilEditor";

function App() {
  return (
    <>
      <div className="App">Hello World</div>
      {/* <QuillEditor /> */}
      {/* <br></br> */}
      <EditorSlate />
    </>
  );
}

export default App;

export const EditorSlate = () => {
  const [value, setValue] = useState("");
  console.log(value);

  var Bold = Quill.import("formats/bold");
  Bold.tagName = "B"; // Quill uses <strong> by default
  Quill.register(Bold, true);

  // var Link = Quill.import("formats/link");
  var onChangeValue = (e) => {
    console.log(e, "ini event");
    if (e.includes("<a")) {
      console.log("contais");
      const link = e.indexOf("<a");
      const linka = e.indexOf("</a>");
      console.log(link);
      console.log(linka);
    }
    setValue("<button>HIAS</button>");
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => onChangeValue(e)}
        placeholder="Write Something"
        modules={modules}
      />
    </>
  );
};
