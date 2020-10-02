import React from "react";
import logo from '../logo.svg';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

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
            username: null
        }
    }

    render() {
        return (
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Button>Login</Button>
            </header>
          </div>
        );
    }
  
}

export default Home;
