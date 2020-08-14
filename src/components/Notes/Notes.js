import React from "react";
import Note from "../../containers/Note/Note";
class Notes extends React.PureComponent {
  render() {
    return this.props.notes.map((note, index) => {
      return (
        <Note
          title={note.title}
          content={note.content}
          deleteClicked={() => this.props.deleteClicked(index)}
        />
      );
    });
  }
}

export default Notes;
