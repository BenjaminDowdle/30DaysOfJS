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

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const buildSwatch = () => {
  let i = 0
  while(i <= 5){
    
    i++
  }
}

const HexaColor = () => (
  <div className='swatches'>
    
  </div>
) 

const Form = () => (
  <div className='subscribe-form'>
    <h2>Subscribe</h2>
    <p>Sign up with your email address to receive news and updates.</p>
    <form>
      <input type="text" id="fname" name="fname" placeholder='First Name'></input>
      <input type="text" id="lname" name="lname" placeholder='Last Name'></input>
      <input type="email" id="email" name="email" placeholder='Email'></input>
    </form>
    <input type="submit" value="Subscribe"></input>
  </div>
)

const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <HexaColor />
    <Form />
  </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);