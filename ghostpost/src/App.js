import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ghostpost: [] };
  }

  upVoteButton(id) {
    fetch(`http://127.0.0.1:8000/api/post/${id}/up_vote/`, { method: "GET" });
    window.location.reload();
  }

  downVoteButton(id) {
    fetch(`http://127.0.0.1:8000/api/post/${id}/down_vote/`, {
      method: "GET",
    });
    window.location.reload();
  }
  sortByVotes() {
    fetch("http://127.0.0.1:8000/api/post/votes/")
      .then((res) => res.json())
      .then((data) => this.setState({ ghostpost: data }));
  }
  showBoasts() {
    fetch("http://127.0.0.1:8000/api/post/boasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ ghostpost: data }));
  }

  showRoasts() {
    fetch("http://127.0.0.1:8000/api/post/roasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ ghostpost: data }));
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/post")
      .then((res) => res.json())
      .then((data) => this.setState({ ghostpost: data }));
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.showBoasts()}>Boasts</button>
          &nbsp; &nbsp;
          <button onClick={() => this.showRoasts()}>Roasts</button>
          &nbsp; &nbsp;
          <button onClick={() => this.sortByVotes()}>Sort by Votes</button>
          &nbsp; &nbsp;
          <button onClick={() => this.componentDidMount()}>
            All Boasts and Roasts
          </button>
        </div>
        <ul>
          {this.state.ghostpost.map((p) => {
            return (
              <div>
                <li>{p.content}</li>
                <p>Total votes: {p.total_votes}</p>
                <p>Posted: {p.post_time}</p>
                <button onClick={() => this.upVoteButton(p.id)}>
                  Thumb's Up
                </button>
                &nbsp; &nbsp;
                <button onClick={() => this.downVoteButton(p.id)}>
                  Thumb's Down
                </button>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
