import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjc0ZmIzYTJlN2I0YjFlOGIyMTU0ZDkiLCJpYXQiOjE2MDE1MDIwNTc4MTYsImV4cCI6MTYwMTUwMjE0NDIxNn0.hCNSCEL2ietA6kyC_EEtJxvHbA44gXI0d2UG2vRkolg"
);

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

    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts() {
    try {
      const response = await fetch(`http://localhost:5000/posts`, {
        mode: "cors",
        headers: myHeaders,
      });
      const postData = await response.json();

      this.setState({
        posts: postData,
      });

      console.log(postData);
    } catch (err) {
      console.log(err);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.getPosts();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="What's on your mind?"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Button onClick={(e) => this.getPosts(e)}>Get Posts</Button>
          {this.state.posts.map((post, index) => (
            <Card text="dark">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <Card.Text>{post.text}</Card.Text>
                  <footer className="blockquote-footer">
                    {`${post.username} @ ${post.date}`}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          ))}
        </header>
      </div>
    );
  }
}

export default Home;
