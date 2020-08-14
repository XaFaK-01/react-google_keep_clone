import React from "react";
import classes from "./CreateNote.module.css";
import { Form, Button } from "react-bootstrap";

class CreateNote extends React.Component {
  render() {
    return (
      <div
        className={classes.Form}
        onClick={() => {
          this.props.openNoteBox();
        }}
        style={{
          background: "#202124",
          backgroundColor: "#202124",
          border: "1px solid #aaa",
          boxShadow: "0 0 0 ",
        }}
      >
        <Form
          onSubmit={this.props.addNote}
          style={{
            background: "#202124",
            backgroundColor: "#202124",
            textAlign: "right",
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              style={{
                border: "0px",
                fontSize: "1.2rem",
                fontWeight: "bolder",
                backgroundColor: "#202124",
                color: "#fff",
              }}
              name="noteTitle"
              type="text"
              value={this.props.noteTitleValue}
              onChange={this.props.onChange}
              placeholder="Note title here"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            style={
              this.props.writeNoteBoxOpened
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <Form.Control
              style={{
                border: "0px",
                fontSize: "15px",
                backgroundColor: "#202124",
                color: "#fff",
              }}
              name="noteContent"
              value={this.props.noteContentValue}
              onChange={this.props.onChange}
              as="textarea"
              rows="3"
              placeholder="Note content here"
            />
          </Form.Group>
          <Button
            style={
              this.props.writeNoteBoxOpened
                ? { display: "none" }
                : { display: "inline-block" }
            }
            variant="outline-secondary"
            type="submit"
          >
            Add Note
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateNote;
