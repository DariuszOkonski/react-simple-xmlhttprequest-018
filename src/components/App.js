import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import DisplayApi from './DisplayApi';
import ButtonController from './ButtonController';

const Api = `https://jsonplaceholder.typicode.com/users`;

class App extends Component {
  state = {
    apiData: []
  }

  apiRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', Api, true);

    xhr.onload = () => {
      try {
        if (xhr.status === 200) {
          const apiData = JSON.parse(xhr.responseText);
          this.setState({
            apiData
          })
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.log('Error: ' + error);
      }
    }

    xhr.send(null);
  }

  handleFetchClick = () => {
    this.apiRequest();
  }

  handleResetClick = () => {
    this.setState({
      apiData: []
    })
  }

  render() {
    return (
      <div className="app">
        <Header
          api={Api}
        />

        <ButtonController
          fetchClick={this.handleFetchClick}
          resetClick={this.handleResetClick}
        />

        <DisplayApi
          api={this.state.apiData}
        />
      </div>
    );
  }
}

export default App;