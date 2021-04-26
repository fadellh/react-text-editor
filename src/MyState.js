import React, { Component } from "react";
import RichTextEditor, { stateToHTML } from "react-rte";
// import ReactHtmlParser from 'react-html-parser';
// import { stateToHTML } from "draft-js-export-html";

class MyStatefulEditor extends Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));

      // handleSubmit = () => {
      const { editorState } = this.props;
      // For testing purposes
      console.log(stateToHTML(editorState.getCurrentContent()));
      // }
    }
  };

  render() {
    const { editorState } = this.props;
    console.log("this.props:", this.props);
    // let html = stateToHTML(this.state.value);
    return (
      <div>
        <RichTextEditor value={this.state.value} onChange={this.onChange} />
        <br />
        <br />
        <h3>Preview:</h3>
        {this.state.value.toString("html")}
        {/* ReactHtmlParser(this.state.value.toString("html")) */}
        {/* html */}
        {/* stateToHTML(editorState.getCurrentContent()) */}
      </div>
    );
  }
}

export default MyStatefulEditor;
