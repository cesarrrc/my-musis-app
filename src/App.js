import './App.css';
import { Component } from 'react';
import ButtonAppBar from './Components/AppBar'

import Login from './Components/Login';
import Dashboard from './Components/Dashboard'

class App extends Component {
  state = {
    loggedIn : false
  };

  setLogin = (value) => {
    this.setState({loggedIn : value});
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <div className="App">
        <ButtonAppBar />
        {
          loggedIn
          ? <Dashboard />
          : <Login onLogin={this.setLogin} />
        }
      </div>
    );
  }
}

export default App;
