import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const myStorage = window.localStorage;

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
      currentUser: null,
      newPostText: "",
    };

    this.getPosts = this.getPosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.handleText = this.handleText.bind(this);

    this.getPosts();
  }

  async getPosts() {
    try {
      const response = await fetch(`http://localhost:5000/posts`, {
        mode: "cors",
        headers: {
          "Authorization": myStorage.getItem("token"),
          "Content-Type": "application/json"
        },
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

  async createPost() {
    try {
      const response = await fetch(`http://localhost:5000/posts/create`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Authorization": myStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: "kkrism",
          text: this.state.newPostText,
        }),
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

  signOut() {
    myStorage.removeItem("token");
  }

  handleSignOut(e) {
    e.preventDefault();
    this.signOut();
  }

  handleText({ target }) {
    this.setState({
      newPostText: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createPost();
    this.getPosts();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Button onClick={(e) => this.handleSignOut(e)} variant="primary">
            Sign Out
          </Button>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ fontSize: 22 }}>
                Share what's going on in your life
              </Form.Label>
              <Form.Control
                onChange={this.handleText}
                as="textarea"
                maxLength="100"
                rows="3"
                placeholder="What's on your mind?"
              />
            </Form.Group>
            <Form.Text className="text-muted" style={{ fontSize: 12 }}>
              {this.state.newPostText.length}/100 Character Limit
            </Form.Text>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="Card-grid">
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
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
