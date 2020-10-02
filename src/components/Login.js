import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postLogin = this.postLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  async postLogin() {
    try {
      const response = await fetch("http://localhost:5000/login", {
        mode: "cors",
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });
      const loginData = await response.json();
      console.log(loginData);
    } catch (err) {
      console.log(err);
    }
  }

  handleUsername({ target }) {
    this.setState({
      username: target.value,
    });
  }

  handlePassword({ target }) {
    this.setState({
      password: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postLogin();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Log In!</h1>
          <Card text="dark">
            <Card.Body style={{fontSize:18}}>
              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={this.handleUsername}
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={this.handlePassword}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Card.Text style={{fontSize:14, marginTop:10}}>Don't have an account? Sign up <Link to ='/signup'>here!</Link></Card.Text>
            </Card.Body>
          </Card>

        </header>
      </div>
    );
  }
}

export default Login;
