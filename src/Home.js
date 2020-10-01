import React from "react";
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';

const myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjc0ZmIzYTJlN2I0YjFlOGIyMTU0ZDkiLCJpYXQiOjE2MDE1MDIwNTc4MTYsImV4cCI6MTYwMTUwMjE0NDIxNn0.hCNSCEL2ietA6kyC_EEtJxvHbA44gXI0d2UG2vRkolg');

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.getPosts = this.getPosts.bind(this);
    }

    async getPosts() {
        try {
            const response = await fetch(`http://localhost:5000/users`, {
                mode: "cors",
                headers: myHeaders
            });
            const postData = await response.json();
            console.log(postData);
        }
        catch(err) {
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
                <Button onClick={(e) => this.getPosts(e)}>Get Users</Button>
            </header>
            </div>
        );
    }
  
}

export default Home;
