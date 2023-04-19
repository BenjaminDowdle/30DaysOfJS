import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import benjaminDowdle from './images/benjamin.jpg'

const Header = () => (
  <div className='header'>
    <h1>Welcome to Day 4!</h1>
    <p>This is how I am learning React</p>
  </div>
  

)

const Main = () => (
  <img src={benjaminDowdle} alt='Benjamin Dowdle' className='profile-picture'></img>
)

const App = () => (
  <div className='app'>
    <Header />
    <Main />
  </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);