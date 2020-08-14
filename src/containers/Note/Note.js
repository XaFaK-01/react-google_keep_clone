import React from "react";
import classes from "./Note.module.css";
import DeleteButton from "../../components/UI/DeleteButton/DeleteButton";

class Note extends React.Component {
  state = {
    noteOpened: false,
  };
  openNote = () => {
    this.setState({ noteOpened: true });
    console.log("Note opened");
    console.log(this.state.noteOpened);
  };

  render() {
    return (
      <div>
        <div
          className={
            this.state.noteOpened ? classes.NoteOpened : classes.NoteClosed
          }
        >
          <h1>{this.props.title}</h1>
          <p onClick={() => this.openNote()}>{this.props.content}</p>
          <DeleteButton clicked={this.props.deleteClicked} />
        </div>
      </div>
    );
  }
}
export default Note;
