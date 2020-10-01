import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ghostpost: [{ name: "post1" }, { name: "post2" }] };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.ghostpost.map((p) => (
            <li>{p.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
