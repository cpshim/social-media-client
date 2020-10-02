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

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postSignup = this.postSignup.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  async postSignup() {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        mode: "cors",
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          handle: "@test",
          email: this.state.email,
          password: this.state.password,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleFirstName({ target }) {
    this.setState({
      first_name: target.value,
    });
  }

  handleLastName({ target }) {
    this.setState({
      last_name: target.value,
    });
  }

  handleUsername({ target }) {
    this.setState({
      username: target.value,
    });
  }

  handleEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  handlePassword({ target }) {
    this.setState({
      password: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postSignup();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Sign Up!</h1>
          <Card text="dark">
            <Card.Body style={{fontSize:18}}>
              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    onChange={this.handleFirstName}
                    type="text"
                    placeholder="Enter first name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    onChange={this.handleLastName}
                    type="text"
                    placeholder="Enter last name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={this.handleUsername}
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={this.handleEmail}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted" style={{fontSize:12}}>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={this.handlePassword}
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Text className="text-muted" style={{fontSize:12}}>
                    Never share your password with anyone else.
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Card.Text style={{fontSize:14, marginTop:10}}>Already have an account? Log in <Link to ='/login'>here!</Link></Card.Text>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default Signup;
