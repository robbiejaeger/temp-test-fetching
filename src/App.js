import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {response: ''};
  }

  componentDidMount() {
    const bodyInfo = {
      name: 'Divad',
      email: 'Divad@gmail.com',
      password: 'divadspassword'
    }
    const options = {
      method: "POST",
      body: JSON.stringify(bodyInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch("http://localhost:3001/api/v1/users/", options)
      .then(response => response.json())
      .then(data => this.setState({response: JSON.stringify(data)}))
      .catch(err => this.setState({response: JSON.stringify(err)}));

    // const bodyInfo = {
    //   email: 'Divad@gmail.com',
    //   password: 'divadspassword'
    // }

    // const options = {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(bodyInfo)
    // }

    // fetch("http://localhost:3001/api/v1/login/", options)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>So Fetch</h1>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
