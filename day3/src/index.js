import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => (
  <h1>Hello World!</h1>
)

const Main = () => (
  <h2>Benjamin Dowdle</h2>
)

const App = () => (
  <div className='app'>
    <Header />
    <Main />
  </div>
)

const root = document.getElementById('root');

ReactDOM.render(<App />, root)
