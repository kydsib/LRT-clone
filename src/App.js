import React, { Component } from "react";
import { ProgramTable, ProgramCard, DataFetching } from "./components";

// function App() {
//   return (
//     <div>
//       <header></header>
//       <DataFetching />
//       <ProgramTable value={"Go home"} />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    fetch("/lrt")
      .then(response => response.json())
      .then(programs => this.setState({ channels: programs }));
  }

  render() {
    return (
      <div className="App">
        <ProgramTable channels={this.state.channels}></ProgramTable>
      </div>
    );
  }
}

export default App;
