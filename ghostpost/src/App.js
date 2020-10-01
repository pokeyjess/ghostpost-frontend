import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ghostpost: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/post")
      .then((res) => res.json())
      .then((data) => this.setState({ ghostpost: data }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.ghostpost.map((p) => {
            return (
              <div>
                <li>{p.content}</li>
                <p>Total votes: {p.total_votes}</p>
                <p>Posted: {p.post_time}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
