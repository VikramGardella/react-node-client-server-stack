import React from 'react';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Vik&apos;s Server</title>
        <meta name="description" content="Login page for accessing the server" />
      </head>
      <header className="App-header">
        <h1>Welcome to Vik&apos;s Server</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm />
        
      </header>
    </div>
  );
}

export default App;
