import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: 'Click button above to test proxied API response.',
    }
  }

  async onClick () {
    const responseObject = await fetch('http://localhost:3000/api/xx/yy');
    const apiResponse = await responseObject.text();

    this.setState({ apiResponse });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.onClick()}>
            Fetch API response
          </button>
          <p>
            {this.state.apiResponse}
          </p>
        </header>
      </div>
    );
  }
}
