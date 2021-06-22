import logo from './logo.svg';
import './App.css';
import SpeechRecog from './SpeechRecog';
import { useState } from 'react';
import { LOGIN_API } from './constants/urls';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

function App() {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const loginFunc = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };
  fetch(LOGIN_API, requestOptions)
      .then(response => response.text())
      .then(data => {
        if(data !== 'Unauthorized'){
          setIsLoggedIn(true);
          setToken(data);
        }
      });
  }

  const LoginScreen = () => {
    
    return (
      
  
     
      <form onSubmit={loginFunc}>
        <Typography variant="h3" color="secondary">
   Welcome to Speech Analyzer!
   </Typography>
   <Typography variant="h5" color="secondary">
   Powered by Expert.AI Cloud API
   </Typography>
        <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" size="small" color="secondary" type="submit">Login</Button>
      </form>
    )
  }

  return (
    <div className="App">
      { !isLoggedIn ?  LoginScreen() : 
      <SpeechRecog  token={token} />
      }
    </div>
  );
}

export default App;
