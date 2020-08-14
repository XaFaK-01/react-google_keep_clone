import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./components/Notes/Notes";
import CreateNote from "./containers/CreateNote/CreateNote";

import { Container, Row } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    notes: [
      {
        id: "cpn1",
        title: "C Programming",
        content:
          " Study in detail about dynamic memory allocation. Finish project prize bond. Review the assignment and upload it to LMS. Review last commit for the code and debug your code.",
      },
      {
        id: "rpap",
        title: "Java",
        content: "Review friend's Java code",
      },
      {
        id: "grcr",
        title: "Grocery Store Items",
        content: "Buy Milk, egg, cheese",
      },
    ],
    // notes: [],
    noteTitle: "",
    noteContent: "",
    writeNoteBoxOpened: true,
  };

  //*****data change handlers*****
  deleteNoteHandler = (noteIndex) => {
    const notes = [...this.state.notes];
    notes.splice(noteIndex, 1);
    this.setState({ notes });

    console.log("[deleteNoteHandler]");
  };

  handleChange(event) {
    const name = event.target.name;
    if (name === "noteContent") {
      this.setState({
        noteContent: event.target.value,
      });
    }
    if (name === "noteTitle") {
      this.setState({
        noteTitle: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const newNote = {
      id: new Date().getSeconds,
      title: this.state.noteTitle,
      content: this.state.noteContent,
    };

    const notes = [...this.state.notes];
    notes.push(newNote);
    this.setState({ notes });

    this.setState({
      noteTitle: "",
      noteContent: "",
    });
  }

  //*****UI update handlers*****

  openNoteBox = () => {
    this.setState({ writeNoteBoxOpened: false });
    console.log("openNoteBox() launched");
  };

  closeNoteBox = () => {
    this.setState({ writeNoteBoxOpened: true });
    console.log("closeNoteBox() launched");
  };

  render() {
    let notes = null;
    if (this.state.notes.length === 0) {
      notes = <h3 style={{ fontStyle: "italic" }}>Try adding some notes!</h3>;
    } else {
      notes = (
        <Notes
          key={new Date().getSeconds()}
          notes={this.state.notes}
          deleteClicked={this.deleteNoteHandler}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <CreateNote
              onChange={this.handleChange}
              addNote={this.handleSubmit}
              noteContentValue={this.state.noteContent}
              noteTitleValue={this.state.noteTitle}
              writeNoteBoxOpened={this.state.writeNoteBoxOpened}
              openNoteBox={this.openNoteBox}
            />
          </Row>
        </Container>
        <div onClick={() => this.closeNoteBox()}> {notes}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
