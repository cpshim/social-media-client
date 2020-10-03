import React from "react";
import logo from "../logo.svg";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      id: null,
      comments: null,
      date: null,
      likes: null,
      text: null,
      username: null,
    };
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Jumbotron className="jumbotron">
            <h1>Welcome to Social Lyfe!</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Connect and share what's happening in your life with the people around you.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
            <p>
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </p>
          </Jumbotron>
        </header>
      </div>
    );
  }
}

export default Home;
