import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import benjaminDowdle from './images/benjamin.jpg'

const Header = () => (
  <div className='header'>
    <h1>Welcome to Day 4!</h1>
    <h2>Getting Started with React</h2>
    <h3>JavaScript Library</h3>
    <p>Benjamin Dowdle</p>
  </div>
)

const prereques = ['HTML', 'CSS', 'JavaScript']
const prerequesFormatted = prereques.map((prereque) => <li key={prereque}>{prereque}</li>)

const Main = () => (
  <div className='main'>
    <p>Prerequisites for learning React:</p>
    <ul>{prerequesFormatted}</ul>
    <img src={benjaminDowdle} alt='Benjamin Dowdle' className='profile-picture'></img>
    <h2>Benjamin Dowdle</h2>
  </div>
  
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